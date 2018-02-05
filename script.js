TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "right": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_r.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_b.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_u_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_u.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_t.jpg",
    "left": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_l.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_325C01D9_2004_E2C4_41BD_4E6FEF1BD249",
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 89,
           "width": 90,
           "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.79,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -35.37,
        "hfov": 5.39
       }
      ],
      "maps": [
       {
        "yaw": -35.37,
        "hfov": 5.39,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 45,
           "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.79,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70, this.camera_6A422AA1_66D1_0F63_41CF_573B49DED837); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0",
      "hfov": 36,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "rotate": true,
      "angle": 0
     }
    ],
    "bottom": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_d_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_d.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_f.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame"
   }
  ],
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "hfovMax": 120,
  "hfovMin": 60,
  "label": "Field",
  "pitch": 0,
  "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "x": 2105.53,
    "y": 637.45,
    "map": {
     "scaleMode": "fit_inside",
     "thumbnailUrl": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_t.jpg",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "class": "Map",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "wildflower_cave_floorplan2",
     "minimumZoomFactor": 0.5,
     "width": 2193,
     "fieldOfViewOverlayInsideColor": "#000000",
     "fieldOfViewOverlayRadiusScale": 0.3,
     "id": "map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
     "overlays": [
      {
       "id": "overlay_3B393DB1_36A8_728A_41B6_2EAE9890272E",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "image": {
        "x": 1301.75,
        "height": 200.57,
        "width": 309.98,
        "y": 713.59,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 138,
           "width": 218,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "map": {
        "x": 1301.75,
        "height": 200.57,
        "width": 309.98,
        "offsetY": 0,
        "y": 713.59,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 69,
           "width": 109,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_3BC9AA71_36A8_318A_41BA_6406BE349EDB",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "image": {
        "x": 2049.35,
        "height": 129.12,
        "width": 112.36,
        "y": 572.89,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 86,
           "width": 74,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_1.png"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "map": {
        "x": 2049.35,
        "height": 129.12,
        "width": 112.36,
        "offsetY": 0,
        "y": 572.89,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 43,
           "width": 37,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_1_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_3B26DFA3_36A8_0E8E_41BB_921B37A054DD",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "image": {
        "x": 1034.9,
        "height": 186.04,
        "width": 141.19,
        "y": 599.26,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 128,
           "width": 95,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_2.png"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "map": {
        "x": 1034.9,
        "height": 186.04,
        "width": 141.19,
        "offsetY": 0,
        "y": 599.26,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 64,
           "width": 47,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_2_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_3B928D8B_3698_129E_41BA_FE869DC0DE00",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "image": {
        "x": 1638.34,
        "height": 145.63,
        "width": 126.65,
        "y": 589.89,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 98,
           "width": 84,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_3.png"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "map": {
        "x": 1638.34,
        "height": 145.63,
        "width": 126.65,
        "offsetY": 0,
        "y": 589.89,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 49,
           "width": 42,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_3_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_3BB1EC7D_3699_F27A_41B8_13D2CCB4777A",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "image": {
        "x": 863.4,
        "height": 162.38,
        "width": 129.12,
        "y": 408.79,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 110,
           "width": 86,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_4.png"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "map": {
        "x": 863.4,
        "height": 162.38,
        "width": 129.12,
        "offsetY": 0,
        "y": 408.79,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 55,
           "width": 43,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_4_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_24BDD7C6_3698_1E96_41C5_786AE6795C0F",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "image": {
        "x": 371.58,
        "height": 100.04,
        "width": 79.1,
        "y": 804.76,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 49,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_5.png"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "map": {
        "x": 371.58,
        "height": 100.04,
        "width": 79.1,
        "offsetY": 0,
        "y": 804.76,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 32,
           "width": 24,
           "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_5_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay"
      }
     ],
     "image": {
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 1103,
        "width": 1600,
        "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26.jpeg"
       },
       {
        "class": "ImageResourceLevel",
        "height": 551,
        "width": 800,
        "grayscale": true,
        "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_lq.jpeg"
       }
      ],
      "class": "ImageResource"
     },
     "height": 1512,
     "maximumZoomFactor": 2,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "initialZoomFactor": 1.5
    },
    "angle": 297.85
   }
  ],
  "adjacentPanoramas": [
   {
    "yaw": -35.37,
    "backwardYaw": 107.31,
    "panorama": {
     "frames": [
      {
       "right": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_r_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_r.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_b_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_b.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_u_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_u.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_t.jpg",
       "left": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_l_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_l.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_320F7096_200B_214C_41A7_B80D4AEFE47C",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 191,
              "width": 192,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -40.84,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -103.44,
           "hfov": 8.76
          }
         ],
         "maps": [
          {
           "yaw": -103.44,
           "hfov": 8.76,
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 95,
              "width": 96,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -40.84,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C, this.camera_6A6C7B11_66D1_0D23_41D5_6485C4616C30); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_3199AD58_200D_63C4_41B8_D8E9F00055B8",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 192,
              "width": 191,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.38,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 107.31,
           "hfov": 10.69
          }
         ],
         "maps": [
          {
           "yaw": 107.31,
           "hfov": 10.69,
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 96,
              "width": 95,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.38,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1, this.camera_6A607AF9_66D1_0CE3_41C2_5DBA3920FE14); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_tcap0",
         "hfov": 36,
         "class": "TripodCapPanoramaOverlay",
         "image": {
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
           }
          ],
          "class": "ImageResource"
         },
         "inertia": false,
         "rotate": true,
         "angle": 0
        }
       ],
       "bottom": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_d_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_d.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_f_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_f.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame"
      }
     ],
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "hfovMax": 120,
     "hfovMin": 60,
     "label": "The Cave",
     "pitch": 0,
     "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "x": 1701.67,
       "y": 662.7,
       "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
       "angle": 331.53
      }
     ],
     "adjacentPanoramas": [
      {
       "yaw": 107.31,
       "backwardYaw": -35.37,
       "panorama": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "yaw": -103.44,
       "backwardYaw": 80.91,
       "panorama": {
        "frames": [
         {
          "right": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_r_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_r.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_b_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_b.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_u_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_u.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_t.jpg",
          "left": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_l_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_l.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_321BC4CB_2007_E2C4_41B6_BC58C9F4FCFF",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 191,
                 "width": 192,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -31.66,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -31.51,
              "hfov": 9.85
             }
            ],
            "maps": [
             {
              "yaw": -31.51,
              "hfov": 9.85,
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 95,
                 "width": 96,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_1_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -31.66,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_3190D5C0_200F_62C4_41B9_B0CFB669F51E",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 192,
                 "width": 191,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 9.99,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 80.91,
              "hfov": 11.3
             }
            ],
            "maps": [
             {
              "yaw": 80.91,
              "hfov": 11.3,
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 96,
                 "width": 95,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 9.99,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70, this.camera_6A076B4C_66D1_0D21_41C2_51B97E45524A); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay"
           },
           {
            "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_tcap0",
            "hfov": 36,
            "class": "TripodCapPanoramaOverlay",
            "image": {
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
              }
             ],
             "class": "ImageResource"
            },
            "inertia": false,
            "rotate": true,
            "angle": 0
           }
          ],
          "bottom": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_d_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_d.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_f_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_f.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame"
         }
        ],
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "hfovMax": 120,
        "hfovMin": 60,
        "label": "Entrance",
        "pitch": 0,
        "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "x": 1456.74,
          "y": 813.87,
          "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
          "angle": -14.05
         }
        ],
        "adjacentPanoramas": [
         {
          "yaw": 80.91,
          "backwardYaw": -103.44,
          "panorama": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "vfov": 180,
        "thumbnailUrl": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_t.jpg"
       },
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "vfov": 180,
     "thumbnailUrl": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_t.jpg"
    },
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "gyroscopeEnabled": true,
  "viewerArea": {
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBorderColor": "#767676",
   "toolTipBorderRadius": 3,
   "toolTipBorderSize": 1,
   "transitionMode": "blending",
   "id": "MainViewer",
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "progressBackgroundColorDirection": "vertical",
   "toolTipFontFamily": "Arial",
   "progressBackgroundOpacity": 1,
   "toolTipFontSize": 12,
   "toolTipShadowHorizontalLength": 0,
   "progressBarBorderColor": "#000000",
   "toolTipShadowVerticalLength": 0,
   "progressBarBorderRadius": 0,
   "toolTipPaddingLeft": 6,
   "progressBarBorderSize": 0,
   "toolTipPaddingRight": 6,
   "progressBarOpacity": 1,
   "toolTipPaddingTop": 4,
   "toolTipPaddingBottom": 4,
   "progressBorderRadius": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBorderColor": "#000000",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowOpacity": 1,
   "progressBorderSize": 0,
   "progressBottom": 0,
   "progressHeight": 10,
   "progressLeft": 0,
   "toolTipShadowSpread": 0,
   "progressRight": 0,
   "paddingLeft": 0,
   "toolTipFontStyle": "normal",
   "minHeight": 50,
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 100,
   "toolTipFontWeight": "normal",
   "progressOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderRadius": 0,
   "paddingRight": 0,
   "playbackBarBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeight": 10,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarBottom": 5,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarLeft": 0,
   "playbackBarRight": 0,
   "borderRadius": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressOpacity": 1,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarProgressBorderRadius": 0,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "borderSize": 0,
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "class": "ViewerArea",
   "playbackBarHeadBorderRadius": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadBorderSize": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadHeight": 15,
   "paddingTop": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarHeadShadow": true,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "shadow": false,
   "height": "100%",
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "width": "100%"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "class": "PanoramaPlayer"
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "viewerArea": "this.MapViewer",
  "id": "MapViewerMapPlayer"
 },
 {
  "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -26.68,
   "pitch": -0.68,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
 {
  "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -96.14,
   "pitch": -29.84,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
 {
  "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -44.47,
   "pitch": -24.97,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "right": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_r.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_b.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_u_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_u.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_t.jpg",
    "left": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_l.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_320D3BC2_2005_26C4_41A6_9AE49167AB23",
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 191,
           "width": 192,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -35.87,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 3.3,
        "hfov": 9.38
       }
      ],
      "maps": [
       {
        "yaw": 3.3,
        "hfov": 9.38,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 95,
           "width": 96,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -35.87,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722, this.camera_6A573A83_66D1_0F27_41C3_9544A2A3A8A2); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_3199F41B_200D_6144_413F_32A1CBC0AA60",
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 192,
           "width": 191,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.37,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 160.11,
        "hfov": 11.35
       }
      ],
      "maps": [
       {
        "yaw": 160.11,
        "hfov": 11.35,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 95,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.37,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_tcap0",
      "hfov": 36,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "rotate": true,
      "angle": 0
     }
    ],
    "bottom": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_d_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_d.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_f.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame"
   }
  ],
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "hfovMax": 120,
  "hfovMin": 60,
  "label": "First Steps",
  "pitch": 0,
  "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "x": 1105.49,
    "y": 692.27,
    "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "angle": -52.19
   }
  ],
  "adjacentPanoramas": [
   {
    "yaw": 3.3,
    "backwardYaw": 151.31,
    "panorama": {
     "frames": [
      {
       "right": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_r_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_r.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_b_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_b.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_u_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_u.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_t.jpg",
       "left": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_l_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_l.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_tcap0",
         "hfov": 36,
         "class": "TripodCapPanoramaOverlay",
         "image": {
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
           }
          ],
          "class": "ImageResource"
         },
         "inertia": false,
         "rotate": true,
         "angle": 0
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_25CD61BE_2E34_5556_41A6_DE09309597DC",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 192,
              "width": 191,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -19.85,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 151.31,
           "hfov": 10.8
          }
         ],
         "maps": [
          {
           "yaw": 151.31,
           "hfov": 10.8,
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 96,
              "width": 95,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -19.85,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623, this.camera_6A49DABE_66D1_0F61_41C2_A403CBFFE818); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_6DDE76B9_66D3_0763_41AB_AAFDEE7D6800",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 191,
              "width": 192,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -36.63,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -46.82,
           "hfov": 9.29
          }
         ],
         "maps": [
          {
           "yaw": -46.82,
           "hfov": 9.29,
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 95,
              "width": 96,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -36.63,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1, this.camera_6A753ADB_66D1_0F27_41D6_F44681B95991); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "bottom": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_d_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_d.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 1904,
          "width": 1904,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_f_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024,
          "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_f.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame"
      }
     ],
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "hfovMax": 120,
     "hfovMin": 60,
     "label": "Inside",
     "pitch": 0,
     "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "x": 927.96,
       "y": 489.98,
       "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
       "angle": -43.96
      }
     ],
     "adjacentPanoramas": [
      {
       "yaw": 151.31,
       "backwardYaw": 3.3,
       "panorama": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "yaw": -46.82,
       "backwardYaw": -170.44,
       "panorama": {
        "frames": [
         {
          "right": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_r_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_r.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_b_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_b.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_u_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_u.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_t.jpg",
          "left": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_l_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_l.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_tcap0",
            "hfov": 45,
            "class": "TripodCapPanoramaOverlay",
            "image": {
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
              }
             ],
             "class": "ImageResource"
            },
            "inertia": false,
            "rotate": true,
            "angle": 0
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_3A5148F0_3168_F28A_41A1_3DB77500FFDC",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 192,
                 "width": 191,
                 "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.34,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -170.44,
              "hfov": 11.47
             }
            ],
            "maps": [
             {
              "yaw": -170.44,
              "hfov": 11.47,
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 96,
                 "width": 95,
                 "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.34,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722, this.camera_6A198B2F_66D1_0D7F_41B2_2E5E2F8447BF); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "bottom": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_d_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_d.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 1904,
             "width": 1904,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_f_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024,
             "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_f.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame"
         }
        ],
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "hfovMax": 120,
        "hfovMin": 60,
        "label": "Jailhouse",
        "pitch": 0,
        "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "x": 411.13,
          "y": 854.78,
          "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
          "angle": 275.15
         }
        ],
        "adjacentPanoramas": [
         {
          "yaw": -170.44,
          "backwardYaw": -46.82,
          "panorama": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "vfov": 180,
        "thumbnailUrl": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_t.jpg"
       },
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "vfov": 180,
     "thumbnailUrl": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_t.jpg"
    },
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_t.jpg"
 },
 {
  "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -4.32,
   "pitch": -28.57,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
 {
  "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 18.26,
   "pitch": -2.72,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
 {
  "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 14.64,
   "pitch": -2.91,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera",
    "id": "PanoramaPlayListItem_6ABB2A41_66D1_0F23_41D5_375B1B3DAD2D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6ABB2A41_66D1_0F23_41D5_375B1B3DAD2D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera",
    "id": "PanoramaPlayListItem_6ABF9A4A_66D1_0F21_41D2_0B8F584E4723",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6ABF9A4A_66D1_0F21_41D2_0B8F584E4723, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera",
    "id": "PanoramaPlayListItem_6ABF1A4B_66D1_0F27_41B5_874BF9F58774",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6ABF1A4B_66D1_0F27_41B5_874BF9F58774, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera",
    "id": "PanoramaPlayListItem_6ABF5A4C_66D1_0F21_41BD_D6FB6401517B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6ABF5A4C_66D1_0F21_41BD_D6FB6401517B, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera",
    "id": "PanoramaPlayListItem_6ABC8A4C_66D1_0F21_41D3_C1D82B6F4222",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6ABC8A4C_66D1_0F21_41D3_C1D82B6F4222, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera",
    "id": "PanoramaPlayListItem_6ABCEA4D_66D1_0F23_41C4_F6656F4ED481",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6ABCEA4D_66D1_0F23_41C4_F6656F4ED481, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 5, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_30E14E5C_2005_21FC_4194_A254BF014615"
 },
 "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_6AB68A36_66D1_0F61_41B4_07795399C059"
 },
 {
  "id": "camera_6A573A83_66D1_0F27_41C3_9544A2A3A8A2",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -28.69,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6A422AA1_66D1_0F63_41CF_573B49DED837",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -72.69,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6A49DABE_66D1_0F61_41C2_A403CBFFE818",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -176.7,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6A753ADB_66D1_0F27_41D6_F44681B95991",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 9.56,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6A607AF9_66D1_0CE3_41C2_5DBA3920FE14",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 144.63,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6A6C7B11_66D1_0D23_41D5_6485C4616C30",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -99.09,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6A198B2F_66D1_0D7F_41B2_2E5E2F8447BF",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 133.18,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6A076B4C_66D1_0D21_41C2_51B97E45524A",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 76.56,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "minWidth": 20,
  "paddingRight": 0,
  "height": 200,
  "scrollBarWidth": 10,
  "children": [
   "this.MainViewer",
   {
    "itemLabelFontFamily": "Arial",
    "gap": 10,
    "itemBackgroundColor": [],
    "itemLabelFontSize": 14,
    "paddingRight": 20,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemBackgroundColorRatios": [],
    "itemPaddingRight": 3,
    "itemThumbnailShadowBlurRadius": 4,
    "scrollBarWidth": 10,
    "itemThumbnailShadow": true,
    "itemLabelHorizontalAlign": "center",
    "backgroundColorRatios": [
     0
    ],
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowColor": "#000000",
    "borderRadius": 5,
    "itemThumbnailShadowOpacity": 0.8,
    "itemPaddingTop": 3,
    "paddingBottom": 10,
    "itemMode": "normal",
    "itemLabelTextDecoration": "none",
    "itemLabelFontWeight": "normal",
    "itemThumbnailBorderRadius": 5,
    "itemPaddingLeft": 3,
    "itemThumbnailWidth": 100,
    "itemThumbnailShadowVerticalLength": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "scrollBarMargin": 2,
    "itemBackgroundOpacity": 0,
    "itemLabelFontColor": "#FFFFFF",
    "itemPaddingBottom": 3,
    "layout": "horizontal",
    "borderSize": 0,
    "verticalAlign": "top",
    "itemBorderRadius": 0,
    "class": "ThumbnailList",
    "backgroundColorDirection": "vertical",
    "horizontalAlign": "left",
    "itemThumbnailScaleMode": "fit_outside",
    "itemThumbnailShadowSpread": 1,
    "itemThumbnailOpacity": 1,
    "backgroundColor": [
     "#000000"
    ],
    "itemThumbnailHeight": 75,
    "backgroundOpacity": 0.2,
    "maxHeight": 600,
    "playList": "this.playList_30E14E5C_2005_21FC_4194_A254BF014615",
    "paddingTop": 10,
    "itemLabelFontStyle": "normal",
    "maxWidth": 800,
    "itemVerticalAlign": "middle",
    "paddingLeft": 20,
    "itemLabelPosition": "bottom",
    "shadow": false,
    "itemLabelGap": 5,
    "minHeight": 0,
    "itemOpacity": 1,
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#FFFFFF"
   }
  ],
  "overflow": "visible",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "verticalAlign": "bottom",
  "layout": "horizontal",
  "borderSize": 0,
  "gap": 10,
  "class": "Container",
  "horizontalAlign": "center",
  "left": 0,
  "backgroundOpacity": 0,
  "right": 0,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "minHeight": 20,
  "shadow": false,
  "bottom": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "contentOpaque": false
 },
 {
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "toolTipBorderRadius": 3,
  "toolTipBorderSize": 1,
  "transitionMode": "blending",
  "id": "MapViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "progressBackgroundOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "progressBarBorderRadius": 0,
  "toolTipPaddingLeft": 6,
  "progressBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowOpacity": 1,
  "progressBorderSize": 0,
  "progressBottom": 2,
  "progressHeight": 10,
  "progressLeft": 0,
  "toolTipShadowSpread": 0,
  "progressRight": 0,
  "paddingLeft": 0,
  "toolTipFontStyle": "normal",
  "minHeight": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "minWidth": 1,
  "toolTipFontWeight": "normal",
  "progressOpacity": 1,
  "top": "0%",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderRadius": 0,
  "paddingRight": 0,
  "playbackBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "right": "0%",
  "paddingTop": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadow": true,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "height": "25%",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "25%"
 },
 {
  "url": "skin/Image_20BDD7F0_2E2C_5CEA_41AE_878B01693AEB.jpg",
  "paddingRight": 0,
  "height": "25.447%",
  "scaleMode": "fit_inside",
  "borderRadius": 0,
  "paddingBottom": 0,
  "id": "Image_20BDD7F0_2E2C_5CEA_41AE_878B01693AEB",
  "verticalAlign": "top",
  "borderSize": 0,
  "class": "Image",
  "horizontalAlign": "left",
  "left": "0%",
  "backgroundOpacity": 0,
  "maxHeight": 400,
  "paddingTop": 0,
  "maxWidth": 400,
  "paddingLeft": 0,
  "shadow": false,
  "minHeight": 1,
  "minWidth": 1,
  "top": "0%",
  "width": "16.038%"
 }
], 
 "gap": 10,
 "paddingRight": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "existsKey": function(key){    return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "getKey": function(key){    return window[key]; },
  "registerKey": function(key, value){    window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); }
 },
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "Player",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "shadow": false,
 "minHeight": 20,
 "start": "this.syncPlaylists([this.playList_30E14E5C_2005_21FC_4194_A254BF014615,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6AB68A36_66D1_0F61_41B4_07795399C059.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "contentOpaque": false
})