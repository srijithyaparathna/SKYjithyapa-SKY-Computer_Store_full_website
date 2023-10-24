package com.skycomputers.backend.Service;

import com.skycomputers.backend.DAO.OrderDAO;
import com.skycomputers.backend.Models.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServices {

    public OrderDAO orderDAO;

    @Autowired
    public OrderServices(OrderDAO orderDAO) {
        this.orderDAO = orderDAO;
    }

    public List<Orders> getAllOrders() {
        return orderDAO.findAll();
    }

    public ResponseEntity<String> createOrder(Orders orders) {
         orderDAO.save(orders);
        return  new ResponseEntity<>("created", HttpStatus.CREATED);

    }
}
