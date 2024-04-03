package com.harshani.taskManage.config;

import com.harshani.taskManage.filter.JwtRequestFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtRequestFilter requestFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.csrf(AbstractHttpConfigurer::disable)

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/v1/users/login", "/api/v1/users/register").permitAll()
                        .requestMatchers("/api/v1/tasks/get-all-tasks","/api/v1/tasks/save",
                               "/api/v1/tasks/update/{id}", "/api/v1/tasks/get-by-id/{id}",
                                "/api/v1/tasks/get-by-status/{status}", "/api/v1/tasks/get-by-employee/{employee}",
                                "/api/v1/tasks/delete/{id}").permitAll()
                        .requestMatchers("/api/v1/tasks/**").authenticated()
                       /* .requestMatchers("/api/v1/tasks/save").hasRole("ROLE_ADMIN")
                        .requestMatchers("/api/v1/tasks/get-all-tasks").hasAnyRole("ROLE_ADMIN","ROLE_USER")
                        .requestMatchers("/api/v1/tasks/update/{id}").hasRole("ROLE_USER")
                        .requestMatchers("/api/v1/tasks/get-by-id/{id}").hasAnyRole("ROLE_ADMIN","ROLE_USER")
                        .requestMatchers( "/api/v1/tasks/get-by-status/{status}").hasAnyRole("ROLE_ADMIN","ROLE_USER")
                        .requestMatchers("/api/v1/tasks/get-by-employee/{employee}").hasAnyRole("ROLE_ADMIN","ROLE_USER")
                        .requestMatchers( "/api/v1/tasks/delete/{id}").hasRole("ROLE_ADMIN")*/

                )
                .httpBasic(Customizer.withDefaults()).build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(10);
    }

}
