package com.skycomputers.backend.Controller;

import com.skycomputers.backend.Models.Admin;
import com.skycomputers.backend.Service.AdminServices;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class AdminController {

    private AdminServices  service;

    public AdminController(AdminServices service) {
        this.service = service;
    }

   @GetMapping("/admin")
        public List<Admin> getalladmin(){
        return service.getalladmin();
   }

    @PostMapping("/admin")
    public ResponseEntity<String> createAdmin(@RequestBody Admin admin)
    {

        return service.createAdmin(admin);
    }





}
