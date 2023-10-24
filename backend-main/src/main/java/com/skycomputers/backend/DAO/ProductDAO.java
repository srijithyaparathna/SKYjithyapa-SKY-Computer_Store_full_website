package com.skycomputers.backend.DAO;

import com.skycomputers.backend.Models.Products;
import com.skycomputers.backend.Service.ProductServices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Repository
 public interface ProductDAO extends JpaRepository<Products,Integer>{



 List<Products> findAllByCat(String cat);


}
