package livestudy.domain.model.report;

import jakarta.persistence.*;
import livestudy.domain.model.admin.Admin;
import livestudy.domain.model.BaseEntity;
import livestudy.domain.model.studyroom.StudyRoom;
import livestudy.domain.model.user.User;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "restrictions")
public class Restriction extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "reported_id", nullable = false)
    private User reported;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_room_id")
    private StudyRoom studyRoom;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id")
    private Admin admin;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RestrictionType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RestrictionSource source;

    @Lob
    @Column(nullable = false)
    private String reason;

    @Column(name = "started_at", nullable = false)
    private LocalDateTime startedAt;

    @Column(name = "end_at")
    private LocalDateTime endAt;

    public static Restriction of(User reported,
                                 StudyRoom studyRoom,
                                 Admin admin,
                                 RestrictionType type,
                                 RestrictionSource source,
                                 String reason,
                                 LocalDateTime startedAt,
                                 LocalDateTime endAt) {

        return Restriction.builder()
                .reported(reported)
                .studyRoom(studyRoom)
                .admin(admin)
                .type(type)
                .source(source)
                .reason(reason)
                .startedAt(startedAt)
                .endAt(endAt)
                .build();
    }
}
