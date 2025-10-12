# TODO: Secure Admin Data Fetching

## Steps to Complete
- [x] Install next-iron-session dependency
- [x] Create lib/session.js for session configuration
- [x] Update pages/api/admin/login.js to set admin session on successful login
- [x] Update pages/api/teams.js to require admin session for fetching teams
- [x] Update pages/api/admin/team/payment-verified.js to require admin session
- [x] Update pages/api/admin/team/ppt-selection.js to require admin session
- [x] Update pages/admin/index.jsx to remove getServerSideProps and pre-fetched data
- [x] Update components/Teams/Index.jsx to fetch teams data client-side after login
- [ ] Test the changes locally (login, data visibility, API access)
- [ ] Deploy and verify on production
