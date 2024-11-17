import { off, onValue, ref, remove, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../../server/firebase';

export default function NeonGlowEffect() {
  const [randomColor, setRandomColor] = useState('');
  const [userId, setUserId] = useState(null);


  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {

    const newColor = generateRandomColor();
    setRandomColor(newColor);


    const uniqueUserId = Date.now().toString();
    setUserId(uniqueUserId);


    const neonElement = document.createElement('div');
    neonElement.classList.add('neon-effect');
    document.body.appendChild(neonElement);


    neonElement.style.backgroundColor = newColor;
    neonElement.style.boxShadow = `0 0 20px 10px ${newColor}`;


    const updatePosition = (e) => {
      neonElement.style.left = `${e.pageX}px`;
      neonElement.style.top = `${e.pageY}px`;

      console.log("Updating Firebase with userId:", userId, "x:", e.pageX, "y:", e.pageY, "color:", newColor);


      if (userId) {

        setTimeout(() => {
          set(ref(database, `users/${userId}`), {
            x: e.pageX,
            y: e.pageY,
            color: newColor,
          });
        }, 1000);
      }
    };


    window.addEventListener('mousemove', updatePosition);


    return () => {
      window.removeEventListener('mousemove', updatePosition);
      if (userId) {
        remove(ref(database, `users/${userId}`));
      }
      neonElement.remove();
    };
  }, [userId]);


  useEffect(() => {
    const usersRef = ref(database, 'users');


    const onChildAddedListener = onValue(usersRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        const userId = childSnapshot.key;


        let userNeonElement = document.getElementById(userId);
        if (!userNeonElement) {
          userNeonElement = document.createElement('div');
          userNeonElement.id = userId;
          userNeonElement.classList.add('neon-effect');
          document.body.appendChild(userNeonElement);
        }

        userNeonElement.style.backgroundColor = user.color;
        userNeonElement.style.boxShadow = `0 0 20px 10px ${user.color}`;
        userNeonElement.style.left = `${user.x}px`;
        userNeonElement.style.top = `${user.y}px`;


        const userRef = ref(database, `users/${userId}`);
        const onValueListener = onValue(userRef, (snapshot) => {
          if (!snapshot.exists()) {
            userNeonElement.remove();
          }
        });


        return () => {
          userNeonElement.remove();
          off(userRef, 'value', onValueListener);
        };
      });
    });


    return () => {
      off(usersRef, 'value', onChildAddedListener);
    };
  }, []);


  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (userId) {
          remove(ref(database, `users/${userId}`));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userId]);

  return <></>;
}
