const express = require('express');
const app = express();
const appRoutes = require('./routes/rts');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/auth', appRoutes);
// app.use('/products', appRoutes);
// app.use('/cart', appRoutes);
// app.use('/orders', appRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
