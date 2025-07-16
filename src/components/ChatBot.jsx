import { useState } from "react";
import axios from "axios";
import { FaRobot } from "react-icons/fa";
import "../css/ChatBot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isSending) return;
    setIsSending(true);

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post("http://localhost:8080/api/chatbot", {
        message: input,
      });
      const botMessage = { from: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Hệ thống đang bận, vui lòng thử lại sau!" },
      ]);
    } finally {
      setInput("");
      setIsSending(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <FaRobot size={20} style={{ marginRight: "6px" }} />
        Chatbot
      </div>

      <div className="chatbot-messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`chat-message ${m.from === "user" ? "user" : "bot"}`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={sendMessage} disabled={isSending}>
          {isSending ? "..." : "Gửi"}
        </button>
      </div>
    </div>
  );
}
