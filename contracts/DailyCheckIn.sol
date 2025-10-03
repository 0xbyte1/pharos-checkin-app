// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title DailyCheckIn
 * @dev A simple daily check-in contract
 * Users can check in daily and their total check-in count is recorded
 */
contract DailyCheckIn {
    // User address => total check-in count
    mapping(address => uint256) public checkInCounts;
    
    // User address => last check-in time
    mapping(address => uint256) public lastCheckInTime;
    
    // Event: emitted when a check-in is made
    event CheckedIn(address indexed user, uint256 count, uint256 timestamp);
    
    /**
     * @dev Check-in function
     * Users call this function to perform a check-in
     */
    function checkIn() external {
        // Increment check-in count
        checkInCounts[msg.sender]++;
        
        // Update last check-in time
        lastCheckInTime[msg.sender] = block.timestamp;
        
        // Emit event
        emit CheckedIn(msg.sender, checkInCounts[msg.sender], block.timestamp);
    }
    
    /**
     * @dev Returns the check-in count for a specific user
     * @param user User address
     * @return Total check-in count
     */
    function getCheckInCount(address user) external view returns (uint256) {
        return checkInCounts[user];
    }
    
    /**
     * @dev Returns the last check-in time for a specific user
     * @param user User address
     * @return Last check-in timestamp
     */
    function getLastCheckInTime(address user) external view returns (uint256) {
        return lastCheckInTime[user];
    }
}
