import React, { useEffect, useState } from 'react';
import EditUserModal from './EditUserModal'

const HomeCard = ({ home, users, selectedUser, refetch }) => {
    const [editUserModalOpen, setEditUserModalOpen] = useState(false)
    const [updatingUsers, setUpdatingUsers] = useState(false)
    const [usersForHome, setUsersForHome] = useState(home?.interestedUsers || [])

    const openUserEditModal = () => {
        setEditUserModalOpen(true)
    }

    const closeUserEditModal = () => {
        setEditUserModalOpen(false)
    }

    const handleSave = async (selectedUsers) => {
        try {
            setUpdatingUsers(true)
            // API call to save the selected users for the specific home
            const response = await fetch('http://localhost:5000/home/update-users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ homeId: home?.id, interestedUsers: selectedUsers }),
            });

            if (response.ok) {
                setUsersForHome(selectedUsers);
                alert('Users saved successfully!');
                refetch()
            } else {
                alert('Failed to save users.');
            }
        } catch (error) {
            console.error('Error saving users:', error);
            alert('An error occurred while saving users.');

        } finally {
            setUpdatingUsers(false)
        }
    };


    return (
        <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{home.street_address}</h2>
                <div className="text-gray-700 space-y-1">
                    <div className="flex justify-between">
                        <span className="font-medium">List Price:</span>
                        <span>${parseFloat(home.list_price).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">State:</span>
                        <span>{home.state}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Zip:</span>
                        <span>{home.zip}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Sqft:</span>
                        <span>{home.sqft}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Beds:</span>
                        <span>{home.beds}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Baths:</span>
                        <span>{home.baths}</span>
                    </div>
                </div>
                <button
                    className="mt-4 w-half px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={openUserEditModal}
                >
                    Edit Users
                </button>
            </div>
            {editUserModalOpen && (
                <EditUserModal
                    loading={updatingUsers}
                    users={users}
                    selectedHome={home}
                    selectedUser={selectedUser}
                    onSave={handleSave}
                    onClose={closeUserEditModal}
                />
            )}
        </div>
    );
};

export default HomeCard;
