var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "الرئيسية",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.876226643019848,
        "pitch": 0.2881230819013787,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -1.2015116321685326,
          "pitch": -0.41110865935999286,
          "rotation": 15.707963267948973,
          "target": "1--",
          "color": "#FFA500" // Orange for كنب برتقالي
        },
        {
          "yaw": -0.9685486604954452,
          "pitch": -0.41538324852417396,
          "rotation": 3.141592653589793,
          "target": "2---",
          "color": "#000000" // Black for كنب جلدي أسود
        },
        {
          "yaw": -0.7822285864379452,
          "pitch": -0.4038147197104962,
          "rotation": 3.141592653589793,
          "target": "3---",
          "color": "#4A4A4A" // Dark Gray for تصميم كلاسيكي قاتم
        },
        {
          "yaw": -0.5979895447576986,
          "pitch": -0.3816222578639561,
          "rotation": 3.141592653589793,
          "target": "4-",
          "color": "#8B4513" // Saddle Brown for مريح
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2133422575430597,
          "pitch": -0.3410039838876102,
          "title": "معلومات المنتج",
          "pdfUrl": "path/to/your/file.pdf",
          "text": "تفاصيل المنتج (سيظهر هذا النص إذا لم يتم تحديد ملف PDF)"
        }
      ]
    },
    {
      "id": "1--",
      "name": "كنب برتقالي",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8975979010256516,
        "pitch": 0.27859835192117544,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -0.8850553037864088,
          "pitch": -0.4109645360577652,
          "rotation": 3.141592653589793,
          "target": "0-",
          "color": "#3A4454" // Default color for الرئيسية
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2---",
      "name": "كنب جلدي أسود",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.8665192121022187,
        "pitch": 0.3023603754956614,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -0.871389572482915,
          "pitch": -0.40459019916785266,
          "rotation": 3.141592653589793,
          "target": "0-",
          "color": "#3A4454" // Default color for الرئيسية
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3---",
      "name": "تصميم كلاسيكي قاتم",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.878007470646093,
        "pitch": 0.22383115453493474,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -0.8832058962926084,
          "pitch": -0.4043219546843453,
          "rotation": 3.141592653589793,
          "target": "0-",
          "color": "#3A4454" // Default color for الرئيسية
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-",
      "name": "مريح",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8826786028844822,
        "pitch": 0.1541309050293691,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -0.9103508701504772,
          "pitch": -0.41050816082495345,
          "rotation": 3.141592653589793,
          "target": "0-",
          "color": "#3A4454" // Default color for الرئيسية
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
}
