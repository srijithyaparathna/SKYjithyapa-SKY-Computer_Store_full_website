package com.skycomputers.backend.DAO;

import com.skycomputers.backend.Models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AdminDAO extends JpaRepository<Admin,Integer> {


}