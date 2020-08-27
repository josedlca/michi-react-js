import React from 'react';

class MichiContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      positionName : [
        {position : 0, symbol : ''},
        {position : 1, symbol : ''},
        {position : 2, symbol : ''},
        {position : 3, symbol : ''},
        {position : 4, symbol : ''},
        {position : 5, symbol : ''},
        {position : 6, symbol : ''},
        {position : 7, symbol : ''},
        {position : 8, symbol : ''}
      ],
      playerOne : [],
      playerTwo : [],
      winArrs : [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,7],
        [0,4,8],
        [2,4,6]
      ]
    }

    this.borderHide = this.borderHide.bind(this)
    this.handleClickKey = this.handleClickKey.bind(this)
  }
  borderHide(cKey){
    switch(cKey){
      case 1:
        return 'border-t-0 border-black border-2'
      case 3:
        return 'border-l-0 border-black border-2'
      case 4:
        return 'border-black border'
      case 5:
        return 'border-r-0 border-black border-2'
      case 7:
        return 'border-b-0 border-black border-2'
      default:
        return ''
    }
  }

  handleClickKey(myKey){
    const {playerOne,  playerTwo} = this.state
    if( (playerOne.length === 0) || (playerOne.length === playerTwo.length)){
      this.setState(state => {
        const playerOne = state.playerOne.concat(myKey);
        return {
          playerOne
        };
      });
      this.setState(prevState => ({
        positionName: prevState.positionName.map(
          (el, key) => myKey === key ? {...el, symbol: 'O'}: el
        )
      }))
    }else{
      this.setState(state => {
        const playerTwo = state.playerTwo.concat(myKey);
        return {
          playerTwo
        };
      });
      this.setState(prevState => ({
        positionName: prevState.positionName.map(
          (el, key) => myKey === key ? {...el, symbol: 'X'}: el
        )
      }))
    }
  }

  componentDidUpdate(prevProps,prevState){
    const{playerOne, playerTwo, positionName, winArrs} = this.state
    let theEnd = ''
    if(prevState.playerOne !== playerOne){
      winArrs.forEach(item => (
        item.map(element => console.log(element))
      ))
    }
    console.log(theEnd)
  }

  render(){
    console.log('im player One', this.state.playerOne)
    console.log('im player Two', this.state.playerTwo)
    return(
      <div className=" flex w-full flex-col items-center">
        <div className = "flex flex-wrap md:w-2/4 xl:w-1/4 h-600 mb-10">
          {this.state.positionName.map((item) => (
            <div 
              key = {item.position}
              onClick = {()=> this.handleClickKey(item.position)}
              className = {`flex w-1/3 h-200 items-center leading-none justify-center text-6xl font-bold cursor-pointer ${this.borderHide(item.position)}`}
            >
              {item.symbol}
            </div>
          ))}
        </div>

        <PrevBtn />
      </div>
    )
  }
}

class PrevBtn extends React.Component{
  render(){
    return(
      <div>
        <button className = "text-lg text-red-600 font-medium border-red-600 border-2 px-6 py-4">Anterior</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App flex w-full flex-col items-center">
      <h1 className = " font-bold text-4xl text-blue-500 mb-10">Michi Gato</h1>
      <MichiContainer />
    </div>
  );
}

export default App;
