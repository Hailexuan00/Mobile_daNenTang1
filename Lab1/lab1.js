console.log("lab 1 - THỐNG KÊ CẦU THỦ BÓNG ĐÁ")

const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
  ];

  // kiểm tra cầu thủ có dúng quy tắc
  const valiRunle = ({name, goals} = {}) =>{
    return !!name && !!goals
  }
  
  // Lọc danh sách cầu thủ hợp lệ
  const validPlayers = players.filter(
    (player) => player && player.name && typeof player.goals === 'number'
  );
  
  // Tính tổng số bàn thắng
  const totalGoals = validPlayers.reduce((sum, player) => sum + player.goals, 0);
  
  // Tìm cầu thủ ghi nhiều bàn thắng nhất
  const topScorer = validPlayers.reduce((topPlayer, player) =>
    player.goals > topPlayer.goals ? player : topPlayer
  );
  
  console.log('Danh sách cầu thủ hợp lệ:', validPlayers);
  console.log('Tổng số bàn thắng:', totalGoals);
  console.log('Cầu thủ ghi nhiều bàn thắng nhất:', topScorer);
  