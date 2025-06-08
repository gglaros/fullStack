package com.example.premier_zone.controller;

import com.example.premier_zone.model.User;
import com.example.premier_zone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    Optional<User> getUser(@PathVariable Long id){
        return userRepository.findById(id);
    }

    @PutMapping("/user/{id}")
    Optional<User> updateUser(@PathVariable Long id, @RequestBody User newUser){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                });
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            return "User not found";
        }
        userRepository.deleteById(id);
        return "User deleted";
    }
}
