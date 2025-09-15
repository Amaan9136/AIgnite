# Update Registration for Event-Based Fields

## Tasks
- [x] Update server/models/Teams.js to add esportEvent field
- [x] Update pages/api/register.js to add switch cases for 'Select The Game' and 'Esport Event'
- [x] Update pages/api/register.js to add conditional logic to clear additionalMember2 and additionalMember3 for non-TECHXHIBIT events
- [ ] Test registration for TECHXHIBIT REGISTRATION (all fields, team members 1/2/3)
- [ ] Test registration for other events (only additionalMember1, no 2/3; TECH ESCAPE ROOM: selectTheGame; Esports: esportEvent)
