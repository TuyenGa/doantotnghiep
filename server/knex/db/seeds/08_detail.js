
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('detail').del()
    .then(function () {
      // Inserts seed entries
      return knex('detail').insert(
        [{
          "price": 73223,
          "for_sale": true,
          "sale": 2591,
          "description": "Function-based context-sensitive parallelism",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 1,
          "feature_id": 1
        }, {
          "price": 118563,
          "for_sale": false,
          "sale": 4505,
          "description": "Reduced systemic model",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 2,
          "feature_id": 2
        }, {
          "price": 165785,
          "for_sale": false,
          "sale": 7079,
          "description": "Centralized client-driven moderator",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 3,
          "feature_id": 3
        }, {
          "price": 323238,
          "for_sale": true,
          "sale": 3055,
          "description": "Extended next generation throughput",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 4,
          "feature_id": 4
        }, {
          "price": 285839,
          "for_sale": true,
          "sale": 6092,
          "description": "Re-engineered executive concept",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 5,
          "feature_id": 5
        }, {
          "price": 388910,
          "for_sale": true,
          "sale": 4385,
          "description": "Versatile content-based support",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 6,
          "feature_id": 6
        }, {
          "price": 220567,
          "for_sale": false,
          "sale": 8042,
          "description": "Realigned multi-state toolset",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 7,
          "feature_id": 7
        }, {
          "price": 59593,
          "for_sale": true,
          "sale": 6021,
          "description": "De-engineered actuating emulation",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 8,
          "feature_id": 8
        }, {
          "price": 279701,
          "for_sale": false,
          "sale": 1438,
          "description": "Right-sized system-worthy concept",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 9,
          "feature_id": 9
        }, {
          "price": 131910,
          "for_sale": true,
          "sale": 8526,
          "description": "Focused uniform collaboration",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 10,
          "feature_id": 10
        }, {
          "price": 349086,
          "for_sale": true,
          "sale": 5405,
          "description": "Polarised stable pricing structure",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 11,
          "feature_id": 11
        }, {
          "price": 114333,
          "for_sale": false,
          "sale": 5925,
          "description": "Managed incremental ability",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 12,
          "feature_id": 12
        }, {
          "price": 114231,
          "for_sale": false,
          "sale": 3086,
          "description": "Open-architected system-worthy knowledge user",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 13,
          "feature_id": 13
        }, {
          "price": 261403,
          "for_sale": true,
          "sale": 7445,
          "description": "Multi-tiered actuating project",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 14,
          "feature_id": 14
        }, {
          "price": 241698,
          "for_sale": true,
          "sale": 3658,
          "description": "Vision-oriented methodical toolset",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 15,
          "feature_id": 15
        }, {
          "price": 338030,
          "for_sale": false,
          "sale": 5644,
          "description": "Synchronised coherent methodology",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 16,
          "feature_id": 16
        }, {
          "price": 126427,
          "for_sale": false,
          "sale": 6777,
          "description": "Cloned background task-force",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 17,
          "feature_id": 17
        }, {
          "price": 313479,
          "for_sale": false,
          "sale": 2124,
          "description": "Optimized object-oriented protocol",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 18,
          "feature_id": 18
        }, {
          "price": 175714,
          "for_sale": true,
          "sale": 1550,
          "description": "Stand-alone mission-critical alliance",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 19,
          "feature_id": 19
        }, {
          "price": 37264,
          "for_sale": false,
          "sale": 4874,
          "description": "Optimized composite monitoring",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 20,
          "feature_id": 20
        }, {
          "price": 352890,
          "for_sale": false,
          "sale": 1558,
          "description": "Integrated bifurcated complexity",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 21,
          "feature_id": 21
        }, {
          "price": 86390,
          "for_sale": true,
          "sale": 9951,
          "description": "Reverse-engineered scalable functionalities",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 22,
          "feature_id": 22
        }, {
          "price": 64203,
          "for_sale": true,
          "sale": 6401,
          "description": "Versatile solution-oriented Graphic Interface",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 23,
          "feature_id": 23
        }, {
          "price": 10266,
          "for_sale": true,
          "sale": 7831,
          "description": "Centralized impactful success",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 24,
          "feature_id": 24
        }, {
          "price": 303159,
          "for_sale": true,
          "sale": 5349,
          "description": "Multi-lateral web-enabled firmware",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 25,
          "feature_id": 25
        }, {
          "price": 269747,
          "for_sale": false,
          "sale": 7130,
          "description": "User-friendly empowering flexibility",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 26,
          "feature_id": 26
        }, {
          "price": 303315,
          "for_sale": false,
          "sale": 5357,
          "description": "Optional heuristic software",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 27,
          "feature_id": 27
        }, {
          "price": 112570,
          "for_sale": true,
          "sale": 6569,
          "description": "Quality-focused high-level challenge",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 28,
          "feature_id": 28
        }, {
          "price": 229545,
          "for_sale": false,
          "sale": 5046,
          "description": "Cloned real-time open system",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 29,
          "feature_id": 29
        }, {
          "price": 4581,
          "for_sale": true,
          "sale": 1247,
          "description": "Streamlined intermediate circuit",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 30,
          "feature_id": 30
        }, {
          "price": 272397,
          "for_sale": true,
          "sale": 6703,
          "description": "Multi-lateral neutral structure",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 31,
          "feature_id": 31
        }, {
          "price": 200568,
          "for_sale": true,
          "sale": 4485,
          "description": "Front-line stable groupware",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 32,
          "feature_id": 32
        }, {
          "price": 76319,
          "for_sale": false,
          "sale": 7846,
          "description": "Open-architected tertiary moderator",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 33,
          "feature_id": 33
        }, {
          "price": 399654,
          "for_sale": true,
          "sale": 8183,
          "description": "Inverse multi-tasking task-force",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 34,
          "feature_id": 34
        }, {
          "price": 166939,
          "for_sale": true,
          "sale": 3959,
          "description": "Synergistic exuding projection",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 35,
          "feature_id": 35
        }, {
          "price": 77157,
          "for_sale": false,
          "sale": 8554,
          "description": "Down-sized regional success",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 36,
          "feature_id": 36
        }, {
          "price": 322309,
          "for_sale": true,
          "sale": 9290,
          "description": "Stand-alone transitional groupware",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 37,
          "feature_id": 37
        }, {
          "price": 159098,
          "for_sale": true,
          "sale": 4466,
          "description": "Implemented responsive ability",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 38,
          "feature_id": 38
        }, {
          "price": 366500,
          "for_sale": false,
          "sale": 2024,
          "description": "Function-based mobile archive",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 39,
          "feature_id": 39
        }, {
          "price": 213930,
          "for_sale": false,
          "sale": 5505,
          "description": "Triple-buffered next generation open architecture",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 40,
          "feature_id": 40
        }, {
          "price": 61458,
          "for_sale": true,
          "sale": 8636,
          "description": "Optional client-server conglomeration",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 41,
          "feature_id": 41
        }, {
          "price": 232790,
          "for_sale": false,
          "sale": 7622,
          "description": "Profit-focused solution-oriented leverage",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 42,
          "feature_id": 42
        }, {
          "price": 310871,
          "for_sale": true,
          "sale": 8239,
          "description": "Robust tangible productivity",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 43,
          "feature_id": 43
        }, {
          "price": 74560,
          "for_sale": false,
          "sale": 5806,
          "description": "Up-sized asynchronous middleware",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 44,
          "feature_id": 44
        }, {
          "price": 226339,
          "for_sale": false,
          "sale": 3477,
          "description": "Total solution-oriented productivity",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 45,
          "feature_id": 45
        }, {
          "price": 185269,
          "for_sale": true,
          "sale": 5523,
          "description": "Focused directional algorithm",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 46,
          "feature_id": 46
        }, {
          "price": 184102,
          "for_sale": true,
          "sale": 1716,
          "description": "Devolved optimizing methodology",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 47,
          "feature_id": 47
        }, {
          "price": 290227,
          "for_sale": true,
          "sale": 5062,
          "description": "Visionary even-keeled support",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 48,
          "feature_id": 48
        }, {
          "price": 79035,
          "for_sale": true,
          "sale": 5956,
          "description": "Horizontal systematic conglomeration",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 49,
          "feature_id": 49
        }, {
          "price": 225659,
          "for_sale": true,
          "sale": 9177,
          "description": "Ameliorated multi-tasking implementation",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 50,
          "feature_id": 50
        }, {
          "price": 312772,
          "for_sale": true,
          "sale": 8202,
          "description": "Diverse demand-driven moderator",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 51,
          "feature_id": 51
        }, {
          "price": 134749,
          "for_sale": false,
          "sale": 7658,
          "description": "Organic neutral portal",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 52,
          "feature_id": 52
        }, {
          "price": 327967,
          "for_sale": true,
          "sale": 4408,
          "description": "Function-based asynchronous product",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 53,
          "feature_id": 53
        }, {
          "price": 245436,
          "for_sale": true,
          "sale": 2291,
          "description": "Streamlined upward-trending info-mediaries",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 54,
          "feature_id": 54
        }, {
          "price": 179145,
          "for_sale": false,
          "sale": 1061,
          "description": "Self-enabling high-level superstructure",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 55,
          "feature_id": 55
        }, {
          "price": 305222,
          "for_sale": true,
          "sale": 7301,
          "description": "Optimized composite process improvement",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 56,
          "feature_id": 56
        }, {
          "price": 276128,
          "for_sale": true,
          "sale": 9626,
          "description": "Expanded real-time productivity",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 57,
          "feature_id": 57
        }, {
          "price": 76817,
          "for_sale": false,
          "sale": 3198,
          "description": "Balanced homogeneous synergy",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 58,
          "feature_id": 58
        }, {
          "price": 383741,
          "for_sale": true,
          "sale": 4142,
          "description": "Operative object-oriented approach",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 59,
          "feature_id": 59
        }, {
          "price": 96233,
          "for_sale": false,
          "sale": 7404,
          "description": "Profound coherent moderator",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 60,
          "feature_id": 60
        }, {
          "price": 96520,
          "for_sale": true,
          "sale": 8067,
          "description": "Persevering global open architecture",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 61,
          "feature_id": 61
        }, {
          "price": 248885,
          "for_sale": true,
          "sale": 9582,
          "description": "Multi-lateral executive project",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 62,
          "feature_id": 62
        }, {
          "price": 281997,
          "for_sale": false,
          "sale": 1328,
          "description": "Realigned hybrid budgetary management",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 63,
          "feature_id": 63
        }, {
          "price": 4511,
          "for_sale": true,
          "sale": 5345,
          "description": "Profit-focused interactive intranet",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 64,
          "feature_id": 64
        }, {
          "price": 111204,
          "for_sale": false,
          "sale": 9414,
          "description": "Self-enabling systematic groupware",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 65,
          "feature_id": 65
        }, {
          "price": 64663,
          "for_sale": false,
          "sale": 3131,
          "description": "Quality-focused multi-state encryption",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 66,
          "feature_id": 66
        }, {
          "price": 311890,
          "for_sale": true,
          "sale": 5560,
          "description": "Configurable context-sensitive neural-net",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 67,
          "feature_id": 67
        }, {
          "price": 92863,
          "for_sale": false,
          "sale": 9956,
          "description": "Operative well-modulated contingency",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 68,
          "feature_id": 68
        }, {
          "price": 233333,
          "for_sale": false,
          "sale": 8532,
          "description": "Stand-alone motivating strategy",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 69,
          "feature_id": 69
        }, {
          "price": 52781,
          "for_sale": true,
          "sale": 4187,
          "description": "Focused contextually-based knowledge user",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 70,
          "feature_id": 70
        }, {
          "price": 320033,
          "for_sale": true,
          "sale": 7838,
          "description": "Profit-focused uniform success",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 71,
          "feature_id": 71
        }, {
          "price": 304481,
          "for_sale": true,
          "sale": 9386,
          "description": "Distributed didactic matrix",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 72,
          "feature_id": 72
        }, {
          "price": 100686,
          "for_sale": false,
          "sale": 3829,
          "description": "Enhanced empowering implementation",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 73,
          "feature_id": 73
        }, {
          "price": 12853,
          "for_sale": false,
          "sale": 6618,
          "description": "Profound intangible capacity",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 74,
          "feature_id": 74
        }, {
          "price": 234655,
          "for_sale": true,
          "sale": 9175,
          "description": "Focused motivating archive",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 75,
          "feature_id": 75
        }, {
          "price": 106204,
          "for_sale": true,
          "sale": 6281,
          "description": "Persevering system-worthy service-desk",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 76,
          "feature_id": 76
        }, {
          "price": 335272,
          "for_sale": true,
          "sale": 3636,
          "description": "Secured global parallelism",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 77,
          "feature_id": 77
        }, {
          "price": 329183,
          "for_sale": false,
          "sale": 6036,
          "description": "Re-contextualized system-worthy migration",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 78,
          "feature_id": 78
        }, {
          "price": 353465,
          "for_sale": true,
          "sale": 8150,
          "description": "Polarised bi-directional structure",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 79,
          "feature_id": 79
        }, {
          "price": 226615,
          "for_sale": false,
          "sale": 5346,
          "description": "Fully-configurable stable installation",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 80,
          "feature_id": 80
        }, {
          "price": 296309,
          "for_sale": true,
          "sale": 6582,
          "description": "Configurable systematic collaboration",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 81,
          "feature_id": 81
        }, {
          "price": 188432,
          "for_sale": true,
          "sale": 6521,
          "description": "Devolved static concept",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 82,
          "feature_id": 82
        }, {
          "price": 216823,
          "for_sale": true,
          "sale": 6047,
          "description": "Advanced optimal collaboration",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 83,
          "feature_id": 83
        }, {
          "price": 229950,
          "for_sale": false,
          "sale": 8387,
          "description": "Realigned needs-based extranet",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 84,
          "feature_id": 84
        }, {
          "price": 200866,
          "for_sale": true,
          "sale": 5960,
          "description": "Customer-focused holistic throughput",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 85,
          "feature_id": 85
        }, {
          "price": 390298,
          "for_sale": true,
          "sale": 7218,
          "description": "Programmable interactive alliance",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 86,
          "feature_id": 86
        }, {
          "price": 55692,
          "for_sale": false,
          "sale": 9726,
          "description": "Object-based local core",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 87,
          "feature_id": 87
        }, {
          "price": 297994,
          "for_sale": true,
          "sale": 4256,
          "description": "Expanded high-level matrix",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 88,
          "feature_id": 88
        }, {
          "price": 393734,
          "for_sale": true,
          "sale": 4707,
          "description": "Cloned full-range challenge",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 89,
          "feature_id": 89
        }, {
          "price": 40699,
          "for_sale": true,
          "sale": 5636,
          "description": "Enhanced discrete superstructure",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 90,
          "feature_id": 90
        }, {
          "price": 206945,
          "for_sale": false,
          "sale": 9233,
          "description": "Customer-focused secondary process improvement",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 91,
          "feature_id": 91
        }, {
          "price": 354612,
          "for_sale": true,
          "sale": 9928,
          "description": "Innovative responsive initiative",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 92,
          "feature_id": 92
        }, {
          "price": 127812,
          "for_sale": false,
          "sale": 7253,
          "description": "Centralized 6th generation core",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 93,
          "feature_id": 93
        }, {
          "price": 111325,
          "for_sale": true,
          "sale": 1790,
          "description": "Total heuristic product",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 94,
          "feature_id": 94
        }, {
          "price": 41963,
          "for_sale": false,
          "sale": 3244,
          "description": "Optional intermediate challenge",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 95,
          "feature_id": 95
        }, {
          "price": 368196,
          "for_sale": false,
          "sale": 9115,
          "description": "Multi-lateral cohesive emulation",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 96,
          "feature_id": 96
        }, {
          "price": 227284,
          "for_sale": false,
          "sale": 5834,
          "description": "Grass-roots impactful productivity",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 97,
          "feature_id": 97
        }, {
          "price": 369920,
          "for_sale": true,
          "sale": 1841,
          "description": "Versatile background help-desk",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 1,
          "location_id": 98,
          "feature_id": 98
        }, {
          "price": 145470,
          "for_sale": true,
          "sale": 9113,
          "description": "Managed secondary protocol",
          "address": "Thái Nguyên",
          "user_id": 1,
          "categories_id": 3,
          "location_id": 99,
          "feature_id": 99
        }, {
          "price": 302737,
          "for_sale": false,
          "sale": 6467,
          "description": "Synchronised tangible data-warehouse",
          "address": "Hà Nội",
          "user_id": 1,
          "categories_id": 2,
          "location_id": 100,
          "feature_id": 100
        }]
      );
    });
};
