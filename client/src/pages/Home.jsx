import { useEffect, useState } from "react";
import { getRooms, createRoom, getMessages, socket } from "../services/backendinit";
import ChatRoom from "../components/ChatRoom";


export default function Home({ user }){
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchRooms();
        socket.connect();
        return () => socket.disconnect();
    }, []);


    const fetchRooms = async () => {
        try {
            const res = await getRooms();
            setRooms(res.data);
        } catch (error) {
            console.error("Failed to fetch rooms", error.message)
            alert("Failed to join the selected room. Please try again.");
        }
    };

    const handleJoinRoom = async (room) => {
        try{
        socket.emit("joinRoom", { username: user.username, roomId: room._id });
        setCurrentRoom(room);
        const res = await getMessages(room._id);


        setMessages(res.data)
        } catch (error) {
      console.error("Failed to join room:", error.message);
      alert("Failed to join the selected room. Please try again.");
    }
    };

    return(
        <div className="flex h-screen">
            <aside className="w-1/4 bg-gray-800 text-white p-4">
                <h2 className="text-lg mb-2">Rooms</h2>
                <ul>
                    {rooms.map((room) => {
                        return(
                            <li key={room._id} className="mb-2">
                                <button onClick={() => handleJoinRoom(room)} className="w-full bg-gray-700 p-2 rounded hover: bg-gray-600">
                                    {room.name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            <main className="flex-1 p-4">
                {currentRoom ? (
                    <ChatRoom 
                        room={currentRoom}
                        messages={messages}
                        user={user}
                        socket={socket}
                    />
                ): (
                    <p>Select a room to join</p>
                )}
            </main>
        </div>
    )
}