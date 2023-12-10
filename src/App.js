
import axios from 'axios';
import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import List from './Components/lists';
import Navbar from './Components/Navigation';
import Loader from './Components/LoaderComp';

function App() {
  
  const [showLoader, setShowLoader] = useState(true);
  const [groupValue, setgroupValue] = useState(getStateFromLocalStorage() || 'status');
  const [orderValue, setorderValue] = useState('title');
  const [ticketDetails, setticketDetails] = useState([]);

  const statusList = ['In progress', 'Backlog', 'Todo', 'Done', 'Cancelled'];
  const userList = ['Anoop sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh'];
  const priorityList = [
    { name: 'No priority', priority: 0 },
    { name: 'Low', priority: 1 },
    { name: 'Medium', priority: 2 },
    { name: 'High', priority: 3 },
    { name: 'Urgent', priority: 4 },
  ];

  const orderDataByValue = useCallback((cardsArry) => {
    const sortedCards = [...cardsArry];
    if (orderValue === 'priority') {
      sortedCards.sort((a, b) => b.priority - a.priority);
    } else if (orderValue === 'title') {
      sortedCards.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    }
    setticketDetails(sortedCards);
  }, [orderValue]);


  const fetchData = useCallback(async () => {
    const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
    if (response.status === 200) {
      const ticketsWithUsers = response.data.tickets.map(ticket => ({
        ...ticket,
        userObj: response.data.users.find(user => user.id === ticket.userId),
      }));
      setticketDetails(ticketsWithUsers);
      orderDataByValue(ticketsWithUsers);
    }
  }, [orderDataByValue]);

  useEffect(() => {
    saveStateToLocalStorage(groupValue);
    fetchData();
  }, [fetchData, groupValue]);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  function handleGroupValue(value) {
    setgroupValue(value);
  }

  
  function handleOrderValue(value) {
    setorderValue(value);
  }

  function saveStateToLocalStorage(state) {
    localStorage.setItem('groupValue', JSON.stringify(state));
  }

  function getStateFromLocalStorage() {
    const storedState = localStorage.getItem('groupValue');
    return storedState ? JSON.parse(storedState) : null;
  }

  const renderList = () => {
    const listMap = {
      'status': statusList,
      'user': userList,
      'priority': priorityList,
    };

    return listMap[groupValue].map(listItem => (
      <List
        groupValue={groupValue}
        orderValue={orderValue}
        listTitle={groupValue === 'priority' ? listItem.priority : listItem}
        listIcon=''
        ticketDetails={ticketDetails}
        {...{ [`${groupValue}List`]: listMap[groupValue] }}
      />
    ));
  };

  return (

    <>
      {showLoader && <Loader />}
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="board-details">
        <div className="board-details-list">
          {renderList()}
        </div>
      </section>
    </>

  );
}

export default App;
