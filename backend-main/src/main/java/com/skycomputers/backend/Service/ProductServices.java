package com.skycomputers.backend.Service;

import com.skycomputers.backend.DAO.ProductDAO;
import com.skycomputers.backend.Models.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Comparator;

@Service
public class ProductServices {

    public static ProductDAO productDAO;

    @Autowired
    public ProductServices(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    public static List<Products> getProductsByCategory(String cat) {

        return productDAO.findAllByCat(cat);
    }

    public static List<Products> searchProduct(String name) {
        //search by name category description
        return productDAO.findAll().stream().filter(product -> product.getName().toLowerCase().contains(name.toLowerCase()) || product.getCat().toLowerCase().contains(name.toLowerCase()) || product.getDescription().toLowerCase().contains(name.toLowerCase())).collect(Collectors.toList());
//        return productDAO.findAll().stream().filter(product -> product.getName().toLowerCase().contains(name.toLowerCase())).collect(Collectors.toList());
    }

    public List<Products> getAllProducts() {
    return productDAO.findAll();

    }




    public ResponseEntity<Products> getOneProduct(int id) {

        return new ResponseEntity<>(productDAO.findById(id).orElse(null), HttpStatus.OK);

    }




    public ResponseEntity<String> deleteProductById(int id) {
        try {
            productDAO.deleteById(id);
            return new ResponseEntity<>("deleted",HttpStatus.OK);
        }

        catch (Exception e){
            return new ResponseEntity<>("error",HttpStatus.BAD_REQUEST);
        }

    }

    public ResponseEntity<Products> updateProduct(Products product) {
        Products existingProduct = productDAO.findById(product.getId()).orElse(null);

        if (existingProduct != null) {
            // Update the fields of the existing product with the new values
            existingProduct.setName(product.getName());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setQuantity(product.getQuantity());
            existingProduct.setImage(product.getImage());
            existingProduct.setCat(product.getCat());

            // Save the updated product to the database
            productDAO.save(existingProduct);

            return new ResponseEntity<>(existingProduct, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<String> createProduct(Products products) {
        productDAO.save(products);
        return new ResponseEntity<>("created",HttpStatus.CREATED);


    }

    public ResponseEntity<String> uploadImage(MultipartFile file) {
       //no need to save in db //upload to local storage and return the path

        MultipartFile multipartFile = file;
        String fileName = file.getOriginalFilename();
//
        //upload to uploads folder
        String filePath = "C:\\Users\\syapa\\OneDrive\\Desktop\\sky\\backend-main\\uploads\\" + fileName;
        System.out.println(filePath);
        try {
            multipartFile.transferTo(new java.io.File(filePath));
            //send path along with the response
            return new ResponseEntity<>(
                    "http://localhost:8081/uploads/" + fileName,
                    HttpStatus.OK
            );
//            return new ResponseEntity<>("uploaded",HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("error",HttpStatus.BAD_REQUEST);
        }




    }
}

