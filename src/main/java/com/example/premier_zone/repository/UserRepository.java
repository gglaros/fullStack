package com.example.premier_zone.repository;

import com.example.premier_zone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
