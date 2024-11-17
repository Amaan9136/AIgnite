import { off, onValue, ref, remove, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../../server/firebase';

export default function NeonGlowEffect() {
  const [randomColor, setRandomColor] = useState('');
  const [userId, setUserId] = useState(null);
  const [usersData, setUsersData] = useState({});
  const [isSupportedDevice, setIsSupportedDevice] = useState(false);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isLaptopOrTablet = width >= 600; 
      setIsSupportedDevice(isLaptopOrTablet);
    };
    checkDevice(); 
    window.addEventListener('resize', checkDevice); 

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isSupportedDevice) return;

    let uniqueUserId = localStorage.getItem('userId');
    if (!uniqueUserId) {
      uniqueUserId = Date.now().toString();
      localStorage.setItem('userId', uniqueUserId);
    }

    setUserId(uniqueUserId);

    const newColor = generateRandomColor();
    setRandomColor(newColor);

    const neonElement = document.createElement('div');
    neonElement.classList.add('neon-effect');
    neonElement.id = uniqueUserId;
    document.body.appendChild(neonElement);

    neonElement.style.backgroundColor = newColor;
    neonElement.style.boxShadow = `0 0 20px 10px ${newColor}`;

    const updatePosition = (e) => {
      neonElement.style.left = `${e.pageX}px`;
      neonElement.style.top = `${e.pageY}px`;

      if (uniqueUserId) {
        set(ref(database, `users_cursor/${uniqueUserId}`), {
          x: e.pageX,
          y: e.pageY,
          color: newColor,
        });
      }
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      if (uniqueUserId) {
        remove(ref(database, `users_cursor/${uniqueUserId}`));
      }
      neonElement.remove();
    };
  }, [isSupportedDevice]);

  useEffect(() => {
    if (!isSupportedDevice) return;

    const usersRef = ref(database, 'users_cursor');

    const onChildAddedListener = onValue(usersRef, (snapshot) => {
      let users = {};
      snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        const userId = childSnapshot.key;

        users[userId] = user;
      });

      setUsersData(users);
    });

    return () => {
      off(usersRef, 'value', onChildAddedListener);
    };
  }, [isSupportedDevice]);

  useEffect(() => {
    if (!isSupportedDevice) return;

    Object.keys(usersData).forEach((userId) => {
      const user = usersData[userId];
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
    });
  }, [usersData, isSupportedDevice]);

  useEffect(() => {
    if (!isSupportedDevice) return;

    const handleVisibilityChange = () => {
      if (document.hidden && userId) {
        remove(ref(database, `users_cursor/${userId}`));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userId, isSupportedDevice]);

  if (!isSupportedDevice) {
    return null; 
  }

  return <></>;
}
