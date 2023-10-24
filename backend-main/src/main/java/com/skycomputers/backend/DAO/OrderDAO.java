package com.skycomputers.backend.DAO;


import com.skycomputers.backend.Models.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDAO extends JpaRepository<Orders,Integer> {
}
