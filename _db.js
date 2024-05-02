let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
    {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
    {id: '4', title: 'Mario Kart', platform: ['Switch']},
    {id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']},
  ]
  
  let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
  ]
  
  let reviews = [
    {Id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {Id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
    {Id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
    {Id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
    {Id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
    {Id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {Id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'},
  ]
  
  export default { games, authors, reviews }