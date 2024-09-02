import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchInterestedUsers = async (homeId) => {
    const resp = await axios.get(`http://localhost:5000/user/find-by-home/${homeId}`);
    console.log("Hello", resp?.data?.address)
    return {
        interestedUser: resp?.data?.interestedUser,
        address: resp?.data?.address
    };
};

const EditUserModal = ({ selectedHome, selectedUser, loading, users = [], onSave = () => { }, onClose = () => { }, onUserDeselection = () => { } }) => {
    const homeId = selectedHome?.id || '';

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [homeAddress, setHomeAddress] = useState('');
    const { data: interestedUsersData, error, isLoading: interestedUserLoading } = useQuery({
        queryKey: ['user'],
        queryFn: () => { return fetchInterestedUsers(homeId) },
    });

    console.log({ interestedUsersData }, 'userssss')
    useEffect(() => {
        if (interestedUsersData) {
            setSelectedUsers(interestedUsersData.interestedUser);
            setHomeAddress(interestedUsersData.address);
        }
    }, [interestedUsersData]);

    console.log({ users, selectedUsers })


    const toggleUserSelection = (user) => {
        if (selectedUsers?.includes(user?.id) || selectedUsers?.includes(user?.username)) {
            setSelectedUsers(selectedUsers.filter(u => u !== user?.id));
        } else {
            setSelectedUsers([...selectedUsers, user?.id]);
        }
    };

    const handleSave = () => {
        if (!selectedUsers.includes(selectedUser)) {
            onUserDeselection();
        }
        onSave(selectedUsers);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                {
                    interestedUserLoading ? <p>Loading...</p> : loading ? <p>Updating users...</p> : (
                        <>
                            <h2 className="text-xl font-bold mb-4">Modify Users for {homeAddress}</h2>
                            <div className="mb-4">
                                {users?.map(user => (
                                    <div key={user} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={user?.id}
                                            checked={selectedUsers.includes(user?.id) || selectedUsers.includes(user?.username)}
                                            onChange={() => toggleUserSelection(user)}
                                            className="mr-2"
                                        />
                                        <label htmlFor={user?.id} className="text-gray-700">{user?.username}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default EditUserModal;
