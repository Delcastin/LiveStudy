package livestudy.domain.model.studyroom;

import jakarta.persistence.*;
import livestudy.domain.model.BaseEntity;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "study_rooms")
public class StudyRoom extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    @Column(name = "participants_number", nullable = false)
    private Integer participantsNumber = 0;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private StudyRoomStatus status;

    public static StudyRoom of(Integer participantsNumber,
                               StudyRoomStatus status) {

        return StudyRoom.builder()
                .participantsNumber(participantsNumber)
                .status(status)
                .build();
    }
}
