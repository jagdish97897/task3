import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL =`mongodb+srv://yatendra2211:xlm6hDmbpTNrlUaN@yatendra.jugsuhj.mongodb.net/yatendra?retryWrites=true&w=majority`;
    const URL =`mongodb+srv://jagdish0000singh:jagdish993131@website.ptgmf5k.mongodb.net/website?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;