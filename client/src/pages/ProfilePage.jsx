import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { Navigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from '../AccountNav';

function ProfilePage() {

  const [redirect, setRedirect] = useState(null);
  const {ready, user, setUser, setReady} = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  } // we're writing this condtional statement because only the profile page returns undefined

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  } //if we're ready, it will display loading

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  } //if we're ready and there's no user, it will redirect to login page

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div>
      <AccountNav />
      
      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
          Logged in as {user.name} ({user.email}) <br />
          <button className='primary max-w-sm mt-2' onClick={logout}>Logout</button>
        </div>
      )}

      {subpage === 'places' && (
        <PlacesPage />
      )}

    </div>
  )
}

export default ProfilePage;
