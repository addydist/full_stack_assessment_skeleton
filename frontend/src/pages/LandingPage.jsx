import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchHomes, fetchUsers } from "../utils/api";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";

const LandingPage = () => {
    const [selectedUser, setSelectedUser] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const {
        data: users = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
    // const queryClient = useQueryClient();

    const {
        data: homesData,
        isLoading: isLoadingHomes,
        error: errorHomes,
        refetch,
    } = useQuery({
        queryKey: ["homes", selectedUser, currentPage],
        queryFn: () => fetchHomes(selectedUser, currentPage),
        enabled: !!selectedUser,
    });
    console.log("heheheh", currentPage);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


    // const handleUserChange = async () => {

    //     console.log("User change detected, refetching homes...");
    //     console.log("Selected User:", selectedUser);
    //     console.log("Current Page:", currentPage);

    //     // if (!selectedUser) {
    //     //     console.error("No user selected! Cannot refetch homes.");
    //     //     return;
    //     // }

    //     // try {
    //     //     await queryClient.refetchQueries(["homes", selectedUser, currentPage], { exact: true });
    //     //     console.log("Homes refetched");
    //     // } catch (error) {
    //     //     console.error("Error refetching homes:", error);
    //     // }
    // };

    if (isLoading) return <div className="flex justify-center items-center text-2xl font-bold min-h-screen">Loading Users...</div>;
    if (error) return <div className="flex justify-center items-center text-2xl font-bold min-h-screen">Error loading users</div>;

    // console.log({ users, homes });
    const { homes = [], totalPages = 1 } = homesData || {};
    return (
        <div className="container mx-auto p-4">
            <Navbar
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                users={users}
            />

            {/* Display loading, error, or data states for homes */}
            {isLoadingHomes && <p className="flex justify-center items-center text-2xl font-bold min-h-screen">Loading homes...</p>}
            {errorHomes && <p className="flex justify-center items-center text-2xl font-bold min-h-screen">Error loading homes: {errorHomes.message}</p>}
            {!selectedUser ? <div className="flex justify-center items-center text-2xl font-bold min-h-screen">No User Selected</div> : homes && (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 p-5">
                        {homes?.map((home) => (
                            <HomeCard key={home.id} home={home} users={users} selectedUser={selectedUser} refetch={refetch} />
                        ))}
                    </div>
                    <div className="flex justify-center items-center my-4">
                        <button
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                        <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
                        <button
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}

        </div>
    );
};

export default LandingPage;
