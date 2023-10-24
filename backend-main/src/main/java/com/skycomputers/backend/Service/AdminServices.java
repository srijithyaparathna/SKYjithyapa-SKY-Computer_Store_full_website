package com.skycomputers.backend.Service;

import com.skycomputers.backend.DAO.AdminDAO;
import com.skycomputers.backend.Models.Admin;
import com.skycomputers.backend.Models.Orders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServices {

    public AdminDAO adminDAO;

    public AdminServices(AdminDAO adminDAO) {
        this.adminDAO = adminDAO;
    }

    public ResponseEntity<String> createAdmin(Admin admin) {
        adminDAO.save(admin);
        return  new ResponseEntity<>("created", HttpStatus.CREATED);
    }

    public List<Admin> getalladmin() {

        return adminDAO.findAll();
    }
}
