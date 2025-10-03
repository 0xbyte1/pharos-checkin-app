// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title DailyCheckIn
 * @dev Basit bir daily check-in contract'ı
 * Kullanıcılar her gün check-in yapabilir ve toplam check-in sayıları kaydedilir
 */
contract DailyCheckIn {
    // Kullanıcı adresi => toplam check-in sayısı
    mapping(address => uint256) public checkInCounts;
    
    // Kullanıcı adresi => son check-in zamanı
    mapping(address => uint256) public lastCheckInTime;
    
    // Event: check-in yapıldığında emit edilir
    event CheckedIn(address indexed user, uint256 count, uint256 timestamp);
    
    /**
     * @dev Check-in fonksiyonu
     * Kullanıcı bu fonksiyonu çağırarak check-in yapar
     */
    function checkIn() external {
        // Check-in sayısını artır
        checkInCounts[msg.sender]++;
        
        // Son check-in zamanını güncelle
        lastCheckInTime[msg.sender] = block.timestamp;
        
        // Event emit et
        emit CheckedIn(msg.sender, checkInCounts[msg.sender], block.timestamp);
    }
    
    /**
     * @dev Belirli bir kullanıcının check-in sayısını döndürür
     * @param user Kullanıcı adresi
     * @return Toplam check-in sayısı
     */
    function getCheckInCount(address user) external view returns (uint256) {
        return checkInCounts[user];
    }
    
    /**
     * @dev Belirli bir kullanıcının son check-in zamanını döndürür
     * @param user Kullanıcı adresi
     * @return Son check-in timestamp'i
     */
    function getLastCheckInTime(address user) external view returns (uint256) {
        return lastCheckInTime[user];
    }
}
