import logo from './logo.png'
import sample_cover from './sample_cover.png'
import sample_profile from './sample_profile.jpg'
import profileOne from './profile_one.png'
import profileTwo from './profile_two.png'
import postOne from './post_one.jpeg'
import postFour from './post_four.jpeg'
import bgImage from './bgImage.png'
import group_users from './group-users.png'
import { Home, MessageCircle, Search, UserIcon, Users } from 'lucide-react'
import sponsored_img from './sponsored_img.jpg'
import storyTwo from './story_three.mp4'

export const assets = {
    logo,
    sample_cover,
    sample_profile,
    bgImage,
    group_users,
    sponsored_img
}

export const menuItemsData = [
    { to: '/', label: 'Home', Icon: Home },
    { to: '/messages', label: 'Chat', Icon: MessageCircle },
    { to: '/connections', label: 'Friends', Icon: Users },
    { to: '/discover', label: 'Search', Icon: Search },
    { to: '/profile', label: 'Profile', Icon: UserIcon },
];

export const dummyUserData = {
    "_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
    "email": "admin@example.com",
    "full_name": "Kavindu Devinda",
    "username": "kavindu_devinda",
    "bio": "💻 Web Developer | ⚡ Turning ideas into interactive experiences | 🌍 Always learning | Creative & Modern | 🚀 Let's build something amazing together!",
    "profile_picture": sample_profile,
    "cover_photo": sample_cover,
    "location": "Batapola, Sri Lanka",
    "followers": ["user_2", "user_3", "user_4"],
    "following": ["user_2", "user_3"],
    "connections": ["user_2", "user_3"],
    "posts": [],
    "is_verified": true,
    "createdAt": "2025-09-09T09:26:59.231Z",
    "updatedAt": "2025-09-21T06:56:50.017Z",
}

const dummyUser2Data = {
    ...dummyUserData,
    _id: "user_2",
    username: "john_doe",
    bio: "🚀 Full-stack dreamer | 🖌️ Crafting sleek, fast websites | ✨ Code. Create. Repeat.",
    full_name: "John Doe",
    profile_picture: profileOne,
}

const dummyUser3Data = {
    ...dummyUserData,
    _id: "user_3",
    username: "stephen_graham",
    bio: "🌱 Lifelong learner | 💡 Problem solver | 💻 Designing digital spaces that matter.",
    full_name: "Stephen Graham",
    profile_picture: profileTwo,
}
const dummyUser4Data = {
    ...dummyUserData,
    _id: "user_4",
    username: "michele_anderson",
    bio: "🌱 Lifelong learner | 💡 Problem solver | 💻 Designing digital spaces that matter.",
    full_name: "Michele Anderson",
    profile_picture: profileTwo,
}

export const dummyStoriesData = [
    {
        "_id": "68833d466e4b42b685068860",
        "user": dummyUserData,
        "content": "She left a note on a café table: “Keep going, stranger.” Someone found it—and changed their week. 💌",
        "media_url": "",
        "media_type": "text",
        "background_color": "#4f46e5",
        "createdAt": "2025-07-25T08:16:06.958Z",
        "updatedAt": "2025-07-25T08:16:06.958Z",
    },
    {
        "_id": "688340046e4b42b685068a73",
        "user": dummyUserData,
        "content": "",
        "media_url": postOne,
        "media_type": "image",
        "background_color": "#4f46e5",
        "createdAt": "2025-07-25T08:27:48.134Z",
        "updatedAt": "2025-07-25T08:27:48.134Z",
    },
    {
        "_id": "68833fe96e4b42b685068a5e",
        "user": dummyUserData,
        "content": "",
        "media_url": storyTwo,
        "media_type": "video",
        "background_color": "#4f46e5",
        "createdAt": "2025-07-25T08:27:21.289Z",
        "updatedAt": "2025-07-25T08:27:21.289Z",
    },
    {
        "_id": "68833e136e4b42b685068937",
        "user": dummyUserData,
        "content": "",
        "media_url": postFour,
        "media_type": "image",
        "background_color": "#4f46e5",
        "createdAt": "2025-07-25T08:19:31.080Z",
        "updatedAt": "2025-07-25T08:19:31.080Z",
    },
    {
        "_id": "68833d706e4b42b685068875",
        "user": dummyUserData,
        "content": "🤫 Not every moment needs to be loud. Sometimes, the best things happen in silence — in drafts 📝, in progress 🧪, in planning 📊. That's where I am right now.",
        "media_url": "",
        "media_type": "text",
        "background_color": "#4f46e5",
        "createdAt": "2025-07-25T08:16:48.617Z",
        "updatedAt": "2025-07-25T08:16:48.617Z",
    },
    {
        "_id": "68833c9e6e4b42b6850687e7",
        "user": dummyUserData,
        "content": "✨ Something meaningful is on the way. I'm working behind the scenes 🛠️ to bring it all together. This space is just the beginning 🌱. Stay tuned 👀.",
        "media_url": "",
        "media_type": "text",
        "background_color": "#4f46e5",
        "createdAt": "2025-07-25T08:13:18.111Z",
        "updatedAt": "2025-07-25T08:13:18.111Z",
    }
]


export const dummyPostsData = [
    {
        "_id": "68773e977db16954a783839c",
        "user": dummyUserData,
        "content": "From concept to creation, our #team is shaping the products that shape tomorrow.",
        "image_urls": [
            postOne
        ],
        "post_type": "text_with_image",
        "likes_count": [],
        "createdAt": "2025-09-16T05:54:31.191Z",
        "updatedAt": "2025-09-16T05:54:31.191Z",
    },
    {
        "_id": "686e6d0407845749500c24cd",
        "user": dummyUser2Data,
        "content": "Today’s effort is tomorrow’s breakthrough. 🌞\n#FreshStart #SteadyWins #NextLevelYou",
        "image_urls": [],
        "post_type": "text",
        "likes_count": [],
        "createdAt": "2025-09-09T13:22:12.601Z",
        "updatedAt": "2025-09-09T13:22:12.601Z",
    },
    {
        "_id": "686e6b21de877d29cf02e2a7",
        "user": dummyUser3Data,
        "content": "Step forward, even when it’s small. Momentum builds greatness. 🌟 \n#DailyDrive #RiseAndShine #KeepMoving",
        "image_urls": [],
        "post_type": "text",
        "likes_count": [],
        "createdAt": "2025-09-09T13:14:09.144Z",
        "updatedAt": "2025-09-09T13:14:09.144Z",
    },
    {
        "_id": "686e3e47ba0cf0fecba19947",
        "user": dummyUserData,
        "content": "",
        "image_urls": [
            postFour
        ],
        "post_type": "image",
        "likes_count": [
            "user_2zdJbcAqiOX9jq2DIueBRQn0lMt"
        ],
        "createdAt": "2025-07-09T10:02:47.213Z",
        "updatedAt": "2025-07-09T10:09:37.075Z",
    },
    {
        "_id": "686e39e86e0585e9e2e58dd3",
        "user": dummyUserData,
        "content": "Your journey is yours alone—own every stride. 🚀\n#PushForward #LimitlessMind #DreamBig",
        "image_urls": [
            
        ],
        "post_type": "text_with_image",
        "likes_count": [],
        "createdAt": "2025-07-09T09:44:08.626Z",
        "updatedAt": "2025-07-09T09:44:08.626Z",
    },
    {
        "_id": "686e361389841ba9f2633201",
        "user": dummyUserData,
        "content": "Every day is a blank page—write it with action, patience, and belief. 📖🌸\n#SelfImprovement #StayFocused #LevelUp",
        "image_urls": [],
        "post_type": "text",
        "likes_count": [],
        "createdAt": "2025-07-09T09:27:47.529Z",
        "updatedAt": "2025-07-09T09:27:47.529Z",
    }
]

export const dummyRecentMessagesData = [
    {
        "_id": "68833af618623d2de81b5381",
        "from_user_id": dummyUser2Data,
        "to_user_id": dummyUserData,
        "text": "Hi . How are you?",
        "message_type": "text",
        "media_url": "",
        "seen": true,
        "createdAt": "2025-07-25T08:06:14.436Z",
        "updatedAt": "2025-07-25T08:47:47.768Z",
    },
    {
        "_id": "6878cc3c17a54e4d3748012f",
        "from_user_id": dummyUserData,
        "to_user_id": dummyUserData,
        "text": "Hi !",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-07-17T10:11:08.437Z",
        "updatedAt": "2025-07-25T08:07:11.893Z",
        "seen": true
    },
    {
        "_id": "686fb66c7f0dcbff63b239e7",
        "from_user_id": dummyUser3Data,
        "to_user_id": dummyUserData,
        "text": "Hello, can we discuss the project details?",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-07-10T12:47:40.510Z",
        "updatedAt": "2025-07-10T12:47:40.510Z",
        "seen": false
    }
]

export const dummyMessagesData = [
    {
        "_id": "6878cc3217a54e4d37480122",
        "from_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "to_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "text": "",
        "message_type": "image",
        "media_url": "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg",
        "createdAt": "2025-07-17T10:10:58.524Z",
        "updatedAt": "2025-07-25T10:43:50.346Z",
        "seen": true
    },
    {
        "_id": "6878cc3c17a54e4d3748012f",
        "from_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "to_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "text": "This is a Samsung Tablet",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-07-17T10:11:08.437Z",
        "updatedAt": "2025-07-25T10:43:50.346Z",
        "seen": true
    },
    {
        "_id": "68835ffc6e4b42b685069def",
        "from_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "to_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "text": "yah , this tablet is good",
        "message_type": "text",
        "media_url": "",
        "seen": false,
        "createdAt": "2025-07-25T10:44:12.753Z",
        "updatedAt": "2025-07-25T10:44:12.753Z",
    },
        {
        "_id": "6878cc2817a54e4d3748010c",
        "from_user_id": "user_2zdFoZib5lNr614LgkONdD8WG32",
        "to_user_id": "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
        "text": "you can purchase it from amazon",
        "message_type": "text",
        "media_url": "",
        "createdAt": "2025-08-17T10:10:48.956Z",
        "updatedAt": "2025-08-25T10:43:50.346Z",
        "seen": true
    },
]

export const dummyConnectionsData = [
    dummyUserData,
    dummyUser2Data,
    dummyUser3Data,
    dummyUser4Data
]

export const dummyFollowersData = [
    dummyUser2Data,
    dummyUser3Data,
    dummyUser4Data
]

export const dummyFollowingData = [
    dummyUser2Data,
    dummyUser3Data,
    dummyUser4Data
]

export const dummyPendingConnectionsData = [
    dummyUserData
]