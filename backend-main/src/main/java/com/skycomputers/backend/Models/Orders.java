package com.skycomputers.backend.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

@Table(name = "orders")

public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date orderdate;
    private String customername;
    private String customeraddress;
    //refer to product table // only one product
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;
    private int totalamount;

}
