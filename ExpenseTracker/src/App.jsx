
import Balance from './Components/Balance'
import Expense from './Components/Expense'  
import './App.css'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'

function App() {
 

  return (
    <GlobalProvider>
    <span>Expense Tracker</span>
    <div className="container">
      <Balance/>
      <Expense/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App
