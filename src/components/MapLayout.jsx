import React, { useState, useEffect } from 'react';

const MapLayout = ({ buildings, onBuildingClick }) => {
  const [hoveredBuilding, setHoveredBuilding] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simular carga del mapa
    const timer = setTimeout(() => setMapLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Configuración de posiciones de edificios en grid isométrico
  const buildingPositions = {
    'townhall': { x: '50%', y: '50%', size: 'large', zIndex: 20 },
    'laboratory': { x: '35%', y: '40%', size: 'medium', zIndex: 15 },
    'barracks': { x: '65%', y: '40%', size: 'medium', zIndex: 15 },
    'castle': { x: '35%', y: '60%', size: 'large', zIndex: 18 },
    'wizardtower': { x: '65%', y: '60%', size: 'medium', zIndex: 16 }
  };

  // Imágenes para cada tipo de edificio
  const getBuildingImage = (buildingType) => {
    const images = {
      'townhall': 'https://cdn.goconqr.com/uploads/flash_card/image_question/4914108/desktop_a8f3e91c-9c08-4113-bc78-3d254469eaf8.png',
      'laboratory': 'data:image/jpeg;base64,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',
      'barracks': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBUSEhIVFhUXFRUVGRgVFxcWFRsQGBggGBcVFxodHyggGB4lHxcXITMhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGzclICUwLS02Ly4tMDgtNS8tLi8vMDcvMi0vLy04Ly8tLzUtNSsvLzUtKysvLy0rLTUrLS8tLf/AABEIANAA8wMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQUGAwQHAgj/xABAEAABAQUCCwUHBAICAgMAAAABAgADESExMkEEBRIiQlFhcYGh8AYTM2LBI1JjcnORs0Ox4fEHFKLRFbIWgpP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QAMBEAAgIBAwIEBAYCAwAAAAAAAAECAxEEEiExQQUTUWFxocHRIjKBseHwM5EUFUL/2gAMAwEAAhEDEQA/APZfE2Q41/pr4myHGv8ATTxNkONf6Z4myHGv9MBfEnSHGv8ATTxJ0hxa+JOkONf6aeJOkOLAPEnSHFniTpDizxJ0hxZbnSHFgLbzqQ47WW86mTdXay3nUhx2tLedSF1drALedTJurtZbz6ZN1aTZbzqZN1drLedTJu3TYBbz6ZN1aTZaz6ZN2uE6st59Mm7dNlrPpk3a4TYBaz6ZN2uE6stZ9Mm7XCdWWs+mTdrhNlrPpk3a4TYBaz6ZN26dWWvaUhdunVlrPpC7dNlrPpC7dNgLa9pSF27a0te01XbtrW17SkLt21pX2mq7dtYBX2mq7dtZX2mq7dtZX2mq7dtZX2mq7dtYBX2mq7+WtfaaruVWV9pqu/llfaaruVWAV9py5VafF5cqta+05cqtPicuVWAfF5cqs+Ly/wCNWfE5cqs+Ly/41YB8Xl/xqz4vLlVnxeX/ABqz4nLlVgHxOXKrKe05cqs+Jy5VZT2nLlVgH+vl50YRuhFjP9fLzowjcxgHiVlDjX+meJWUONf6a+JWUPX+meJWUPX+mAniTMoca/0zxJmUOLXxJmUOvRpbmZQYC25mUGluZlBluZlBluZlBgLbzjKH9st51IXc2W84yh/bS3nGULubAW3nUhdzaW86mTdumy3nGULubLWcZQu1wmwC1n0ybtcJstZ9Mm7XCbLWcZQu1wmy1nmRTdrhNgFrPpk3a4TZazzLJu3TbRO0vaVT3DRgzowS7SrvCCQS8GjHUmM9u5sF2iwt8pQdl6suwI5JUZk1iakbDIRLVpanFvlJc4yWK6FKO6UsI2zD+3LlOE5PdlSEyK0kHPBnAQmBrjc2zYFhbt+gP3agpN0Nl2sHY3i8FKfO05Su7KkpDuIIjA5U4CUm2PB8coxcoPCD3RJy0g3iyUxviYbftCP/AJLjYoS78lqyiideas5XHPf7f34nplrPpC7cyvtNV25uHBMIS+dowhNFJStI1pIyh+7c1c+hF25rpmivtNV25pX2mq5rXPvF25pX2l4uYC19peLmV9peLuTK+0vFzK+0vF3JgFfaX6uTT4l+rk1+Jfq5NPiX6uTAPiX6uTPiX6uTPiX6uTPiX6uTAPiX6uTPiX6uTPiX6uTX4l+rkwE+Jfq5NfiX6uTT4l+rk1+Jfq5MBP8AXy86MI3MZ3AVnEwjcxgL4lc2Hr/TPErKHr/TS3azYev9Mt1zYev9MBbczKHXoy3Myg0t1lBluZlBgLbmZQZbmZQaW5mUGW5mUGAtuZlBlvOMoXc2W5mULtbLecZEXa72AW84yIu13stZxkRdrhNpazjIi7Xe2J7VPcJ/1VvMHHtE3Ca+70igGqhXgYTgwGXtZxkRdrhNopQI7xWbkznIQE4kmjeJrxthTyZfPFAwM3iiDqMAYNxEvckpyopIgUkqCSNomC3O472mPxPjlDvD8JK3qVp7x8QtMVJUFPCQRC41bu4bj908wjIdoUtRAhkQnLbCDYfD8WOEgrILowqJpOyFDukW+MQuyMIcqBtuzOAypb+H2apZBRsdq64x7FupOcNnZcmZdY0QjC3TtaVIWheUpK4CAyTfGBq2R7U4S6epSiIJM8mIMhUypc2u9osXqW8eYSViKUkUqlMa7WxeJcIQpccqYSQBtJ/gNxCvzLY2vql9yS2MqYbH35XwPcew/aBy+dIc2Hrl2lITctCBAKT6i5trrn0Iu3N4E6WpKgpJKVJIIIkQoUILendj+14wgh2/MH4EjIJeQ/ZeyhhLU2h0KEl3Nvrn3i7cyufeLmx73HWChZy37tK0wilSgJ3CJlGdKt3wcr2l9w1i5vE0zlxa6lrn3i5lfaX6uTK594uZXPv1cm9PB8S/VyZ8S/VyZ8S/VyafEv1cmAvxL9XJp8S/VyZ8S/VyZ8S/VyYB8S/Vya/Ev1cmnxL9XJnxL9XJgL8S/VyZ8S/VyafEv1cmvxL9XJgJ3AVnEwjcxnchWcTAm5jAW3azYev9Mt2s2Hr/AEy3azYU479zS3azYU479zAW3alBluapQaW7WbCnRa25qlCnRYBbmqUKMtzMoU2stzVKFNrS1NUiKbWAtqZkRQa2WpmRFBrZamqRFBrbH4+xolxgz3CngMHKCrJFVEUHEwEdrAuTsYbhjpCe8fLDsAwGUYRNQBeTsGptSf8A+Q3QipblWUF5LsIUCF5xycokDIlA0LaTjXtI/wAMd97HLWEEpQIBKSagD1MzATbCIyloBeB4EgRUVwTB5GKcjg1aVsnyuMGxDQQilGeXKXdflX6myKxG+Q9eoCkQDxRASJBC89KRO4Khwb7/APFvxq+xbm7OuSlwmKspSs5SoxiozrsEBwbNu1KbxSkks9TPaWeDScfYlwpbtRCJJEKm0rXLd926eLsGUnCHIKSIOyJi8GYbZO2IfpQHiXpdoySlQAE1jORWl4bAYvWs4WApZVkuiZ6yZnk0M5SeU+heprcanJd8fuXHLta3L1KBnKiBxLaW5xLhiSIOVx2QPq27vXr8eG9IJVpAFIEzTg3LgacIeEZa0qyVikE0pzb2uc4p7US6yG7a7VjssNGPxZg+FKdkvHKhC9RSJjXEybK4PgjxLoKISgmsTEx9fu2yOsBWQMvhCZbCdpcDfQLyagkDJSBIazDXe3UJzsWLOPYpqfkyzU/1/qOiHSAYk5RnM7dQoG3zsV2qQsjB3qvaJADswEFIAASg+bbfK+vjxw568sJO+g+7fTnAclQevHmcCCACRnXTEy06W0glLe8y5P0rXPvFzK59+pvNezXazCXZd9+oLdFSXYU8JDyJMBkqmXkIziIyq3pXn0tXJu4TUllHN9E6ZbZDz6Wrkzz6Wrkzz6WrlvaefS1ct7dkJfPpauTT4ml7vJnn0vd5b2efS93lvowD4ml7vJr59LVyaefS93lvo18+l7vLewDz6Wrkzz6Wrk08+lq5b2vn0tXLewE7kKziYE3MZ3KVZxMCbpMYBbtZsKXV3st2s2FLv3Zbt5sKXb6tbdvNhS792Alu1mwpd+7W3NWbCl37stW82FLv3aWpqzYUuj92AtqapEUuj92lqapEU2/dlqapEUuj92WpqkRS6P3YC2pqkRQa/u2I7W4sXheA4Q5BCXi3ZSiMgVjOSDG4kAR2tl7U1SIoKR+7LU1SIoKR+7D1PHJ+WsBw15g71QIKVAlC0KkQoGBSoawRBs+e0zoPUezUpIETOiyJEJoogfu29/5pxQ4OB/7ndpS/S8doKgIFTtRhBWuEYg7G8RyzGLQqpOWWXnrJeS4J9T1nF+NsDenNeJCjcSXa48o82zrh2mEe9VD5hCG+vGLeUYrwty8GS/AiBIwiSdR/7bvIxY5j4Y3Tg3Tq9yspG9Y/xjikOlO8Jeu1REMkKL17G4pAiQRrbE9mMAdPXq3weEiTtNEy1ka20/CMQ5K+8dJimBzQKGFRsbrqxmrB1JGWchazGAPhAiKhfeZNWvplNbYPkt1TdcG5Lh4+ptQxM9ev1JCvYoWDGQJAqG7ylO3T2DpSVQgQBMCBpG9sXgWNneERdOHkoEwmgqMKCLY7AnSycyRF7TVw2rBBddKx5Z6Q7frWXTx2oJWnKkYkTECCJ7Jwa4S9ShK+8KS9KVkZUk5ao7m0/wD1sYoIW7eqAKdApE9ovbZsTqdhJVhKyp6E5xXCUtGApNo3VFS39zne2tpp2OcX945cPnRW7KwEqQjOioiMRTVzbX0YEkPchTxYKTnZSQRLcTe2z9oO0pioOzkO0xTlZMFVgQLwbtba0jCnajEKST9jsb3fLsXKtNBxW94fxMg8xy9Q+d4Sc5Tt4haRICCFBWQkUSICHFv0S4fJWhL5JjlJCkjWkiIP2Lfl/D1zA1D9297/AMY4Z3uKsHXpO0lyBWIdKKEnXZAaWqOIlfWz3Wv24No8+lq5b2efS93lva+fS93lSrTz6Xu8qVaUpjz6Xu8t9GefS93lStGefS93lStGefS93lStJsA8+l7vKlaM8+l7vLfRnn0vd5UrSbPPpe7ypWjAPPpe7y3tfPpauW9p59L3eVKtfPpe7ypVgJ3SVTUYE3SYzukqmowJqJMYBbt5sKXR114MtW82FLv3Zat5sKXR114MtW82FLo66sBbVvNhS6P3aWreaRS6P3Zat5sKXR+7LVvNIpdH7sAtTXIil0fuy1NUiKXR+7LU15pFLo/dlqa5EUuj92AtqapEUFI/dlqapEUFI/dpamqRFBSP3ZamqRFBSP3YDR/8zKjil4VCCu9cBP8A+gJP2ym/Pb5vfP8AN74/+MTGRVhDtMIVASpXCYbwR/RvQcmChSgSNH7w1tnMTYwWsh1VRkkm47djYzEVTvDdjCQlDwkCd0KhQooNzJ4XBLSk5pPobNh2GIHsu8hRKjPdAG7ftbiwzBXJAKnaTkiAiAYDUGxmA4Y5eQS+SAYwjcQdYblxtg71AS6TMqpCmTr2NVg9vDNXV1zuXmReUuMeh0FOw8eBAAAvhclvh2+X/tZLtRCTGW4V2NmMDxYtMUO0KWoiMZapx1ANi8WugMICyqGTGMBEg/tVplNepnOixNJxZsScY4e6QIqQATDu1EFREIlRlEDiG48X43evcIVlwJSM2/J2p1Ha2DxnjMheccpSoqJUST/bcvZ7DAcIypCIgZ82q27nBl6caYySj1ydLtbhaisuiIQUVKF8bo/vxbF4CvO3ybv9qsKQ9wkqQcoZKUxuJEabGxbozazp/wDGihqJOVjZk4N7D/g/DYuMIc6Tt4l4kbHickj7uz928fQ24f4qxopxjN2kHNfBTpQNIwykHflJAHzHW0xAe++fT93lSrTz6fu8qVozzafu/wAVZ5tP3eVK0YeDz6fu8qVozz6fu8qVpNnn0/d5UrRnn0/d5UrSbAPPp+7ypWk2efT93lStGefT93lStJs8+n7vKlaMA8+n7vKlaM8+n7vKlWebT93lStGebT93lStGAd0lU1GBNRED92M7tKpqMCaiIH7sYBat5sKXb68GWrebCl0ddeDLVvNhS7fXgy1bzYUu314MAtW82FLo/dlq3mkUuj92tq3mwpd+7S1bkRS6P3YBamuRFLo/dlqa5EUuj92tqa5EUuj92lqa5EUuj92AWprkRQUj92WpqkRQUj92tqa5EUFI/dlqa5EUFI/dgNN/y6kKxPhClgZSS5KZX98gREb4EjiW/Oj8yb9B/wCZ1q/8SsmR71yCBKKcsV4w5N+fVgEgayBzb3senaxAqZ3hu1jV0rKyhKBqKtwKwTJmn+f5bke4asphKN5rJuIyUjuUXE6aH5USDa3V2hu/gOOXrtUTnUGdXJFwNzdV2sGCqGMIf9NxFLPLi+pItTZHDi+TaH/aUPEB2mDpJAyhes61KvHlo3VgBE8TuDYZLoFIbkcpKQQCYHbKDROhdi1DxCX/ALWWYrDMIK1FRvPK5vhLzW0e1LRCSTANLhYKDk28nMVRY7LfYweG9uOEDBvItHskzJYOrNbs4JhKnbxD1ElO1JWPmScofs3SwU3N6LiTEjlDhPeOkKWRlEqESI0DR6jURpWX3O6aXY8I9pwLCkPXaH6FA5SQpIBBECJS3Fubzafu8qVo3nPZfG3dPnaEpCUFQQQJJnIGFJEhvRvNp6uVK0bzT6hXRzjB5dS63gebT93lStGebT93lStJs82n7vKlaM82n7vKlaNYIR5tP3eVK0mzzafu8qVozzafu8qVozzaerlStGAebT93lStGebT93+K0Z5tPVypWjPNp6v4rRgHdpM1KgTURA/djO7QZqMDeIgMYBa8SUKXb68GtrxJQpdvrwZa8SWq7f6MteJLVdv8ARgFq3KFLmlq3IilzW1blClzLVuRFLmAWprkRS5pamuRFLmtbciKXMrNciKXMArNciKXMrNciKCkWVmuRFLmw/a7GbzB8Bf4QkJ712iKAqzlEgAkREZmkWHqWeDXP8z4YkYrWhcO8eLdJQkwBgl4FqUAZyCTMaw35/Wg1bK41xjhGEvFPsIeKeLNSr3fdSBJI2CAbqEMQwczrC4o8zMDcZb1CYRioAjy1VyiW6AWAW2Dvv9Yo7sReZKVLWoe8Aruk+6IERvLQWZgtsFy8lmnEpb5v8Kxkw+GPIvMuAABEgIDJFOTcZIJMKNmMbYAFJOEORF0qagKu1XgjVHqDYbJg3dM4zjmPwx6exxqITjN7+/OfXPdHPg6jCEL25Q3w4IgQG+2lITrucSP37wh2iIjHKMkgHottzns+nBHIK3aXwJitYBCk8NQbvdi3wLgi9KyOBAI/ctsJIbF1eqn5jh2Rp6eiO1S7s14dnsDegKQmIM4pJDV92Gwciq/uD6N3zgCnR73B5HSd6KhfAXHc3afY4SURQM6hHuqvBaq7bVzCTwTuqHdGsOey+DuHztSnpIypJVSInMjc2Xx5jZLlKcoqSFrycpIBUBWUZRk2B7Q4YQp0omYWTy/ltjwbCRkhaoECcTAje003L8E7PxexxGKW6MeCYscPUOx3uUFVzoBQBmIi4t6T2d7UOsJOTMPwKVQqEiUkbJw3t5hh2Gl4FLOV3YmpUzGNMo3R1Xtx9j8aqOM8GCVZCe8IhGEYoMAdcaQ2tY0qnGTk+M9iS7TR8lub5S4/k9y82nq5U3M82nq5UrRnm09XKm5nm09XKm5tUwx5tPVypWjPNp6uVNzPNp6uVNzXzaerlTcwE82nq5U3NfNp6v43NPNp6v43NfNp6v43MBMhBmowN4jBjMhBmowVeIwYwC14ktV2/wBGV8SWq7f6Na+JLVdv9GV8SWq7f6MBK+JLVc1rbkbrmlfElqua18SRuuYCVtyN1zK25G65lbcjdcytuRuuYDE49x+6wcQeGL4iLt2IgqnAEmByUxBmdRq2pY0S+wsKL9YAIICUpzUpjEQnM7dlzZvH+KFrfqfrQkjITMkRASJgD7nidzYLC8NyBHJJTs1N8t4vq9T5nlRTS7e+D6Hw6mvYnXzPv7eyPMcMxUXbxbszyVEbCLjxDdDC8DUExyTDa23Yc7S9fxSYBUIktsa8RYK8d5K85RvCoEHYB6xaz/2ipjFz6vqS6nw2K68HkDnFylBRykISCAVLMBE3CUzCcGyOMniQ+IjlApdwNxGQACPtzbtdp8DUh8XRsuwEo+QiIO83nW2HwqbtCr0xdn/2TyJHBtWqzzHGzPDX78/QyralCEq0umHn1xx9fkZbsy/U7wkIjmLBiLjBJI/ZsFhRziBTKP7t3MDfEPHatS0ngTNuphyYKI1KI+xaWMErXL1S+WSCU29PGPo380v5OTBUipbnbqYOqbbV2WxEl+qL2IRAmNJC9urrY1R3SIa4Obwjj7K4X3a1giKCATsgYZXNt7cuRDKqCI7INhMDxVg7l5loWsGBTBcCCDr+zY/BMOUVPXQMHaFjJSKAERI3RbF1DjfNzh7fY1KU64KMjP4zxvIIdiGtXoG1vF+FDuyb1LWeOVD0bnevNUy3VwdCQmQAEyboG+LdU0raWq6nN5fQj3BUvDniLR5hSHKckEmGjGMN7dTDcZwzXf3/AOmnZzEr7DcIDl1MyUsxEUussJUsAkZUMqML4NdjDPB3ZbXX+VdO51H2NHqkqSp57PLywiMEBUIRhSO1vQP8cdhXqnjvDX5U77tZUhypCkvFKTAoWSdCphCeTqbaeyP+OMFwNQfKUp7hGSQQuBdgqACslMKWoRjabdQL9O4fxua1GvHUxrtU5LES+bT1fxuaebT1cqbmu3T1fxuabdPV/G5pSmPNp6uVNzXzaer+NzTbp6v43Ndunq/jcwE82nq/jczzaer+NzXbp6v43M26er+NzATIQZqMFXzYzJQZqMFXsYC18SWq7f6Mr4ktV2/0aV8SWr19GtfElq9fRgFfElq9fRlfEkbmlfElq9fRrXxJG5gFbcjcytuRuZXxJG5pW3I3MAUMrxK3Btbxn2blF1I+4SAIXZEv3LbLW3I3M2rtXNBqNNXqI7Zr7/oTU3zplugz83Y5xylWEL7sQQk5MNZFpX3i31g2M01jA9Xtme3f+OH+Df7GFu1AuQtKkuwCp6e9XBQAAgEoKpVJAbQHeEf9cW4WkhGCiuxaj4hbv3Secm3Y2wn/AGsmnegZMaBYuEblV2GNza8tyQ5eFQgStCADULTFR5fu3Pi92t68ShAJUSIQrv2QrFtw7Y9n1qSHjsRyTFSQKyhl6yZfZqLur004U5wn8sP9mWv80ZWY5Sa+OVj/AGkaC5UckHqLdvDnPeI70ACMlwoF+9sB/dsnivFXeIyU2itIHHong2cwjF7tyAhAlOJvJ1lpr9bGE0l1+h34f4dK/MJPCa+fb++hh8A7LAwKnkrwKncbm2jCX7ty7yRJIAKvQNruB4dllSZRSSRORTGR/ZshhLhLxBQ8iEkCMDMETjHeGqXSnKSVr6CdVdfNPKYwd8pbxeUEwTkwKVZQgoRmdc26IcQePFA2iJbQIN3nQSlAduhBIEI3nWom8nWW6rx6h2YRy4iIgRD/AOxG9pYRWW0sL0LGn07wnYfZASMoyHMnUGwuHvySqGaJS9d7ZNzg718uCUlStQoB+wG9tn7G9ilPXyH636EF28QvukEKenu1RGUQYIBIGuWqLS1zUp7U+SfWSVdeWYnsz/jjC8IUhT5JcuTMmKS8KYAjJTGWVGSjSBlr9kxLibB8FdB24dpQRqE1H3lG8lu+Bebdw/ZrtNvU2jGCR8xZdKzqNpt6utjNunq62M2m3q62NNv6mrrY3REXb+pq62NNv6mrrY12/qautjTb+pq62MA2/qautjXb+pq62NNv6mrrYzb+pq62MBdunq62M2i3q62NNv6mrrY12i3q62MBMlBmswVexmSg2znXsYC18SWr1pwZXxJavWnBp9Th604NfqcPWnBgFfE4etODK+JW7oM+pW71pwafUrd0GAtfErd0GV8St3QZ9St3QafUrd0GAvz1uZ89q5nz1u6DPntXdBgHzyVd1vbU+0/+P8Bwt2pKnaXD4qCg8dISlWVFRzgJKBK1kxqTG4Ntfz2ruhta/Pau9KbWA8BxW6Vi3C3+CqWkvHakxWJBSCkKEiZCCgYXRvbOOu3uBleScvUVBIyY3wnEjaA229o/8a4DhTx6+WFofvYEqSpRiqKc4JJKQclBTqz4wMA3iuOuymH4G+Dt9g64mOSpALxCgE5RyVATISCSIA5pMICLZmo8Kovm5zzlmjHxCUao1qK47+p6fi3HuCPXkHbs5ZMMopSDCFY1bB9pFUhrUODYzsQFKyXmikhROv3QN7d7Gzp7lZSwIEyANzYr09dOq2xfT1Z9DoN0q9y6tGNcYmzgtDyChXNjI3Gbdv8A1VJTnriBsADfSEqSEkgiP2+7fOEBTwhIBJMgAL9zX1fnll16CmKzBHRwjCCqQkOZbLYn7NqeDvXkUOwJSzlR1ahtbLYs7PIdDLf5y7kCYBuj7x5NsmKMBXhAkSlE0kmZKkyKUi4xvNINE7bL3tpX6/b7lC7UQrjnPHr9jp4h7PKyXpwdaBHJT3asrKygCY5c5HKEoXGbbfijEjlwAUoAfZJBVpGJiQTKIiJRbnxZi104RkoTBdYkxUo3Emno3c327vTY2tpdHGn8T/M0sv4Hzmp1k7W0m9uf7kbTbu6ozabfXBm+3d1Rm/xOuFGulIbT4nXCjNv6nXCjN/idcKNPydcKMA2/qaupUZt/U1dSoz8nXCjPydcKMA2/qaupUa7f1NXUqNPydcKNfydcKMA2/qdcKM2jxOuFGn5OuFGu7xOuFGAkEadq+rGQRp2r6+jGAfV4etODPqcPWnBn1eHrTgz6vD1pwYB9St3rTgz6lbugz6lbvWnBn1K3dBgH1K3dBn1K3dBn1K3dBn1K3dBgL9St3QZ89q7obWfUtXdBp89q7obWAfPau6G1nz2rvSkqs+e1d0JVZ89rR9KSqwD57Wj6UlVhEbdq702Viz57Wj6UlVnz29H0pKrAYn/47gwdqd92ElS1vABLOXO6QEfsA2sYz7PLRmvEZQkQaicpFt9+e3o+lJVaLQCCF2rvSlJxbP1fh1eo56S9V9S7ptfbR0eV6fY0ZzitxkZPdiBEw3Sddw4BLpE6RmpcSYAXwiYDeQ23YXiMmSXgQSBAZMaSuIE27eK8WodOg7UEl5EKjkgRWDFKpSJBAgTOQbJ0vhFu6St6fHr8/wBy/PxNbMpt57c/Mw+JMQqDwvMIETkoU7Sah5VWVAkGBAAubZgkCoguo365SZ81u702M+a3d6bG+iqqjVHbFGTdfO6W6Rd9u702NN9u702M327vTYzf4l3psaQhLv8AEu6ozf4l3VKNN/iXdUa7/Eu6pRgG/wATrhRp+TrhRm/xOuFGfk64UYB+TrhRn5OuFGfk64UZ+TrhRgH5OuFGfk64UZ+TrhRn5OuFGAfk64UZu8TrhRn5OuFGbvE64UYBmadq+voxmZp2r6+kmMA+rw9acGfV4etODPq8PWnBn1eHrTgwD6lbvWnBn1K3dBn1K3etODPqVu6DAPqVu6DPqVu6DPqVu6DPqVu6DAPqWrugz57V3QlVr9S1d0GfPau6G1gJ89q7oSqz57Wj6UlVnz2ruhKrPntaPpSVWAfPa0fSkqs+e3o+lJVZ89rR9KSqz57ej6UlVgHz29H0pKrPmt6PpSVWfPb0fSkqs+a3o+lJVYB81u70pKrPmt3elJVZ81u70pKrPmt3elJVYB81u70pJnzW7vTYz5rd3psZ81u702MA327vTYzf4l3psZvt3emxm/xLvTYwDf4l3VGb/Eu6pRm/xLuqNd/iXdUowE3+J1woz8nXCjXf4nXCjT8nXCjAPydcKM/J1woz8nXCjPydcKMA/J1woz8nXCjI3fq9cKM/J1wowD8nXCjN3idcKM/J1wozd4nXCjAPZ6dq+vpJjMzTtX19JMYD/9k=',
      'castle': 'data:image/jpeg;base64,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',
      'wizardtower': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAKYnyTbKhP9J15eLj9HJ1wljhqCZ-qBFXA&s'
    };
    return images[buildingType] || images['townhall'];
  };

  // Estilos de edificio basados en su tipo
  const getBuildingStyles = (building, position) => {
    const isHovered = hoveredBuilding === building.id;
    const isLarge = position.size === 'large';
    
    const baseSize = isLarge ? 100 : 80;
    const scale = isHovered ? 1.15 : 1;
    
    return {
      position: 'absolute',
      left: position.x,
      top: position.y,
      transform: `translate(-50%, -50%) scale(${scale})`,
      width: `${baseSize}px`,
      height: `${baseSize}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      filter: isHovered
        ? 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5)) brightness(1.1)'
        : 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))',
      zIndex: isHovered ? 25 : position.zIndex,
      animation: mapLoaded ? `buildingAppear 0.8s ease-out ${building.level * 0.2}s both` : 'none'
    };
  };

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      zIndex: 5
    }}>
      {/* Edificios de la aldea */}
      {buildings.map((building) => {
        const position = buildingPositions[building.id];
        if (!position) return null;

        return (
          <div
            key={building.id}
            style={getBuildingStyles(building, position)}
            onClick={() => onBuildingClick(building)}
            onMouseEnter={() => setHoveredBuilding(building.id)}
            onMouseLeave={() => setHoveredBuilding(null)}
          >
            {/* Imagen del edificio */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}>
              <img
                src={getBuildingImage(building.id)}
                alt={building.title}
                style={{
                  width: position.size === 'large' ? '45px' : '35px',
                  height: position.size === 'large' ? '45px' : '35px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
                  transition: 'all 0.3s ease'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback emoji si la imagen no carga */}
              <div style={{
                display: 'none',
                fontSize: position.size === 'large' ? '2.5rem' : '2rem'
              }}>
                {building.id === 'townhall' && '🏛️'}
                {building.id === 'laboratory' && '🧪'}
                {building.id === 'barracks' && '⚔️'}
                {building.id === 'castle' && '🏰'}
                {building.id === 'wizardtower' && '🔮'}
              </div>
              
              {/* Nivel del edificio */}
              <div style={{
                background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                color: '#FFD700',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                padding: '3px 8px',
                borderRadius: '12px',
                border: '2px solid #654321',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                fontFamily: 'Georgia, serif',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'
              }}>
                Nv.{building.level}
              </div>
            </div>

            {/* Efecto de brillo para edificios importantes */}
            {position.size === 'large' && (
              <div style={{
                position: 'absolute',
                inset: '-6px',
                background: 'conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.4), transparent)',
                borderRadius: '50%',
                animation: 'importantGlow 4s linear infinite',
                zIndex: -1
              }}></div>
            )}
          </div>
        );
      })}

      {/* Tooltip de edificio */}
      {hoveredBuilding && (
        <div style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          background: 'linear-gradient(145deg, rgba(139, 69, 19, 0.98), rgba(101, 67, 33, 0.95))',
          color: '#F5DEB3',
          padding: '15px 22px',
          borderRadius: '20px',
          border: '4px solid #FFD700',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
          zIndex: 30,
          animation: 'tooltipAppear 0.3s ease-out',
          fontFamily: 'Georgia, serif'
        }}>
          <div style={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginBottom: '6px',
            color: '#FFD700'
          }}>
            {buildings.find(b => b.id === hoveredBuilding)?.title}
          </div>
          <div style={{
            fontSize: '1rem',
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            ⚔️ Haz clic para explorar
          </div>
        </div>
      )}

      {/* Animaciones CSS */}
      <style>{`
        @keyframes buildingAppear {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3) translateY(-30px);
          }
          60% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) translateY(0);
          }
        }

        @keyframes importantGlow {
          0% { 
            transform: rotate(0deg); 
            opacity: 0.6;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: rotate(360deg); 
            opacity: 0.6;
          }
        }

        @keyframes tooltipAppear {
          0% {
            opacity: 0;
            transform: translateY(-15px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default MapLayout;