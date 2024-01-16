import md5 from "crypto-js/md5";


const gravatarUrl = (email) => {
    const hashedEmail = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hashedEmail}?d=identicon`;
};


const peopleData = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: gravatarUrl("john.doe@example.com"),
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        avatar: gravatarUrl("jane.smith@example.com"),
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        avatar: gravatarUrl("bob.johnson@example.com"),
    },
    {
        id: 4,
        name: "Alice Brown",
        email: "alice.brown@example.com",
        avatar: gravatarUrl("alice.brown@example.com"),
    },
    {
        id: 5,
        name: "Charlie White",
        email: "charlie.white@example.com",
        avatar: gravatarUrl("charlie.white@example.com"),
    },
    {
        id: 6,
        name: "Eva Green",
        email: "eva.green@example.com",
        avatar: gravatarUrl("eva.green@example.com"),
    },
    {
        id: 7,
        name: "Frank Miller",
        email: "frank.miller@example.com",
        avatar: gravatarUrl("frank.miller@example.com"),
    },
    {
        id: 8,
        name: "Grace Lee",
        email: "grace.lee@example.com",
        avatar: gravatarUrl("grace.lee@example.com"),
    },
    {
        id: 9,
        name: "Henry Davis",
        email: "henry.davis@example.com",
        avatar: gravatarUrl("henry.davis@example.com"),
    },
    {
        id: 10,
        name: "Ivy Robinson",
        email: "ivy.robinson@example.com",
        avatar: gravatarUrl("ivy.robinson@example.com"),
    },
];



export default peopleData;
