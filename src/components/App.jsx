import user from '../user.json';
import friends from '../friends.json';
import data from '../data.json'
import transactions from '../transactions.json'
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
export const App = () => {
  return (<>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
  <Statistics 
      title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
  </>
   )
};