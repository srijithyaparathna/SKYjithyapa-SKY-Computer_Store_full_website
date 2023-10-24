package com.skycomputers.backend.Controller;


import com.skycomputers.backend.DAO.OrderDAO;
import com.skycomputers.backend.Models.Orders;
import com.skycomputers.backend.Service.OrderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class OrderController {

  private OrderServices service;

    public OrderController(OrderServices service) {
        this.service = service;
    }

    @GetMapping("/orders")
    public List<Orders> getAllOrders(){
        return service.getAllOrders();

}

@PostMapping("/orders")
public ResponseEntity<String> creatOrder(@RequestBody Orders orders)
{
    return service.createOrder(orders);
}

}
