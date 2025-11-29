const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect(
    "mongodb://127.0.0.1:27017/mydatabasezzz",
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDB connected"))
 .catch(err => console.log("MongoDB error:", err));

const seedUsers = async () => {
    try {
        await User.deleteMany();
        console.log("Old users removed!");

        // TẠO USER TỪNG CÁI — ĐỂ NÓ HASH PASSWORD ĐÚNG
        await User.create({
            name: "Admin",
            email: "admin@gmail.com",
            password: "123456",
            avatar: {
                public_id: "admin_avatar",
                url: "https://i.pravatar.cc/150?img=1"
            },
            role: "admin"
        });

        await User.create({
            name: "Khách",
            email: "phuc@gmail.com",
            password: "123456",
            avatar: {
                public_id: "user_avatar",
                url: "https://i.pravatar.cc/150?img=2"
            },
            role: "user"
        });

        console.log("Users added!");
        process.exit();

    } catch (error) {
        console.log(error);
        process.exit();
    }
};

seedUsers();
