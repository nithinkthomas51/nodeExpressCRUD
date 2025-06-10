import express from 'express'
const router = express.Router();

const users = [
    {
        id: 1,        
        firstName: 'Nithin',
        lastName: 'Thomas',
        email: 'nithinkthomas51@gmail.com'

    },
    {
        id: 2,
        firstName: 'Naveen',
        lastName: 'Thomas',
        email: 'naveenthomas@gmail.com'
    },

];

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const idVal = parseInt(id);
    const user = users.find((user) => user.id === idVal);

    res.send(user);
})

export default router