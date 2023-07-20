import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Link from 'next/link'
import '../public/styleTable.css'; 



const Settings = () => {
  const [integrations, setIntegrations] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() =>
  
  {
    // Fetch integrations from Firebase Firestore
    const fetchIntegrations = async () => {
        const integrationsRef = collection(firestore, 'integrations');
        const snapshot = await getDocs(integrationsRef);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setIntegrations(data);
      
    //   const integrationsRef = firebase.firestore().collection('integrations');
    //   const snapshot = await integrationsRef.get();
    //   const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //   setIntegrations(data);
    };

    // Fetch vendors from Firebase Firestore
    const fetchVendors = async () => {
      const vendorsRef = firebase.firestore().collection('vendors');
      const snapshot = await vendorsRef.get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setVendors(data);
    };

    // Fetch users from Firebase Firestore
    const fetchUsers = async () => {
      const usersRef = firebase.firestore().collection('users');
      const snapshot = await usersRef.get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(data);
    };

    fetchIntegrations();
    fetchVendors();
    fetchUsers();
  }, []);

  // Function to add a new record to a table
  const addRecord = async (tableName, record) => {
    const collectionRef = firebase.firestore().collection(tableName);
    await collectionRef.add(record);
    // Refresh the table after adding a new record
    switch (tableName) {
      case 'integrations':
        setIntegrations([...integrations, record]);
        break;
      case 'vendors':
        setVendors([...vendors, record]);
        break;
      case 'users':
        setUsers([...users, record]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="data_table">
      <h1>Settings</h1>
      <h2>Integrations</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add additional table columns as needed */}
          </tr>
        </thead>
        <tbody>
          {integrations.map((integration) => (
            <tr key={integration.id}>
              <td>{integration.id}</td>
              <td>{integration.name}</td>
              {/* Add additional table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Vendors</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add additional table columns as needed */}
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>{vendor.name}</td>
              {/* Add additional table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add additional table columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              {/* Add additional table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/">back to enrollment</Link>
    </div>
  );
};

export default Settings;
