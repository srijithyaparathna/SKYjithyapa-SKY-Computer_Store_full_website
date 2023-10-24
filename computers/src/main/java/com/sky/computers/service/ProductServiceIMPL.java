package com.sky.computers.service;

import com.sky.computers.dto.ProductSaveRequest;
import com.sky.computers.entity.Product;
import com.sky.computers.repo.ProductRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceIMPL implements  ProductService
{
    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public Product saveProduct(ProductSaveRequest productSaveRequest) {
        Product product = modelMapper.map(productSaveRequest,Product.class);
        return productRepo.save(product);
    }
}
