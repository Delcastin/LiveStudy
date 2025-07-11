package livestudy.domain.model.admin;

import jakarta.persistence.*;
import livestudy.domain.model.BaseEntity;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "admins", uniqueConstraints = @UniqueConstraint(name = "uk_admin_email", columnNames = "email"))
public class Admin extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(nullable = false, length = 50)
    private String password;

    @Column(nullable = false, length = 20)
    private String nickname;

    public static Admin of(String email,
                           String password,
                           String nickname,
                           PasswordEncoder encoder) {

        return Admin.builder()
                .email(email)
                .password(password == null ? null : encoder.encode(password))
                .nickname(nickname)
                .build();
    }
}
