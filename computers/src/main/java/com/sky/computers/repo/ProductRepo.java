package com.sky.computers.repo;
import com.sky.computers.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProductRepo extends JpaRepository<Product,Integer> {

}
