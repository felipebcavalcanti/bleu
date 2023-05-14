import { useState } from "react";
import style from "./styles.module.css"

export default function Home() {
  const [button1Stats, setButton1Stats] = useState({
    hp: 200,
    atk: 20,
    def: 30
  });
  const [button2Stats, setButton2Stats] = useState({
    hp: 500,
    atk: 25,
    def: 15
  });

  const [messagePlayerStats, setMessagePlayerStats] = useState([]);
  const [messageMonsterStats, setmessageMonsterStats] = useState([]);

  const handleAttack = (attackerStats, defenderStats, setDefenderStats) => {
    const damage = attackerStats.atk - defenderStats.def;
    const updatedHp = Math.max(0, defenderStats.hp - damage);
    setDefenderStats({ ...defenderStats, hp: updatedHp });
    return damage;
  };

  const handleButton1Attack = () => {
    const damage = handleAttack(button1Stats, button2Stats, setButton2Stats);
    setMessagePlayerStats(prevState => [...prevState, `Player lost ${damage} hitpoints`
    ]);
  };

  const handleButton2Attack = () => {
   const damage2 = handleAttack(button2Stats, button1Stats, setButton1Stats);
    setmessageMonsterStats(prevState => [...prevState, `Monster lost ${damage2} hitpoints`])
  };

  return (
    <div className={style.container}> 
      <button onClick={handleButton1Attack}>
        Jogador 1 - HP: {button1Stats.hp}, ATK: {button1Stats.atk}, DEF:{" "}
        {button1Stats.def}
      </button>
      <button onClick={handleButton2Attack}>
        Monstro - HP: {button2Stats.hp}, ATK: {button2Stats.atk}, DEF:{" "}
        {button2Stats.def}
      </button>
      
      <div className={style.message}>
        <ul >
          {messagePlayerStats.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>

        <ul>
          {messageMonsterStats.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
            <Server />
    </div>
  );
}



