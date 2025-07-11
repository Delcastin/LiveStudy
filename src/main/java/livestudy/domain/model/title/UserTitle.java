package livestudy.domain.model.title;

import jakarta.persistence.*;
import livestudy.domain.model.BaseEntity;
import livestudy.domain.model.user.User;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "user_titles",
        uniqueConstraints = @UniqueConstraint(
                name = "uk_user_title_name",
                columnNames = {"title_id", "user_id"}))
public class UserTitle extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "title_id", nullable = false)
    private Title title;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public static UserTitle of(User user, Title title) {

        return UserTitle.builder()
                .user(user)
                .title(title)
                .build();
    }
}
