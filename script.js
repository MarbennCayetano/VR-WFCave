TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_t.jpg",
  "adjacentPanoramas": [
   {
    "panorama": {
     "class": "Panorama",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_t.jpg",
     "adjacentPanoramas": [
      {
       "panorama": {
        "class": "Panorama",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_t.jpg",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
          "yaw": 80.91,
          "class": "AdjacentPanorama",
          "backwardYaw": -103.44,
          "distance": 1
         }
        ],
        "mapLocations": [
         {
          "x": 1456.74,
          "class": "PanoramaMapLocation",
          "y": 813.87,
          "map": {
           "scaleMode": "fit_inside",
           "maximumZoomFactor": 2,
           "initialZoomFactor": 1.5,
           "fieldOfViewOverlayRadiusScale": 0.3,
           "fieldOfViewOverlayInsideColor": "#000000",
           "label": "wildflower_cave_floorplan2",
           "class": "Map",
           "width": 2193,
           "minimumZoomFactor": 0.5,
           "fieldOfViewOverlayOutsideColor": "#000000",
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "id": "map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
           "height": 1512,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 1600,
              "height": 1103,
              "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26.jpeg"
             },
             {
              "grayscale": true,
              "class": "ImageResourceLevel",
              "width": 800,
              "height": 551,
              "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_lq.jpeg"
             }
            ]
           },
           "overlays": [
            {
             "class": "AreaHotspotMapOverlay",
             "image": {
              "x": 1301.75,
              "height": 200.57,
              "width": 309.98,
              "y": 713.59,
              "class": "HotspotMapOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 218,
                 "height": 138,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_0.png"
                }
               ]
              }
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
             "rollOverDisplay": false,
             "map": {
              "x": 1301.75,
              "height": 200.57,
              "width": 309.98,
              "offsetY": 0,
              "y": 713.59,
              "class": "HotspotMapOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 109,
                 "height": 69,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_0_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3B393DB1_36A8_728A_41B6_2EAE9890272E"
            },
            {
             "class": "AreaHotspotMapOverlay",
             "image": {
              "x": 2049.35,
              "height": 129.12,
              "width": 112.36,
              "y": 572.89,
              "class": "HotspotMapOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 74,
                 "height": 86,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_1.png"
                }
               ]
              }
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 0)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
             "rollOverDisplay": true,
             "map": {
              "x": 2049.35,
              "height": 129.12,
              "width": 112.36,
              "offsetY": 0,
              "y": 572.89,
              "class": "HotspotMapOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 37,
                 "height": 43,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_1_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3BC9AA71_36A8_318A_41BA_6406BE349EDB"
            },
            {
             "class": "AreaHotspotMapOverlay",
             "image": {
              "x": 1034.9,
              "height": 186.04,
              "width": 141.19,
              "y": 599.26,
              "class": "HotspotMapOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 95,
                 "height": 128,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_2.png"
                }
               ]
              }
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 3)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
             "rollOverDisplay": false,
             "map": {
              "x": 1034.9,
              "height": 186.04,
              "width": 141.19,
              "offsetY": 0,
              "y": 599.26,
              "class": "HotspotMapOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 47,
                 "height": 64,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_2_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3B26DFA3_36A8_0E8E_41BB_921B37A054DD"
            },
            {
             "class": "AreaHotspotMapOverlay",
             "image": {
              "x": 1638.34,
              "height": 145.63,
              "width": 126.65,
              "y": 589.89,
              "class": "HotspotMapOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 84,
                 "height": 98,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_3.png"
                }
               ]
              }
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 1)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
             "rollOverDisplay": false,
             "map": {
              "x": 1638.34,
              "height": 145.63,
              "width": 126.65,
              "offsetY": 0,
              "y": 589.89,
              "class": "HotspotMapOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 42,
                 "height": 49,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_3_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3B928D8B_3698_129E_41BA_FE869DC0DE00"
            },
            {
             "class": "AreaHotspotMapOverlay",
             "image": {
              "x": 863.4,
              "height": 162.38,
              "width": 129.12,
              "y": 408.79,
              "class": "HotspotMapOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 86,
                 "height": 110,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_4.png"
                }
               ]
              }
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 4)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
             "rollOverDisplay": false,
             "map": {
              "x": 863.4,
              "height": 162.38,
              "width": 129.12,
              "offsetY": 0,
              "y": 408.79,
              "class": "HotspotMapOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 43,
                 "height": 55,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_4_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3BB1EC7D_3699_F27A_41B8_13D2CCB4777A"
            },
            {
             "class": "AreaHotspotMapOverlay",
             "image": {
              "x": 371.58,
              "height": 100.04,
              "width": 79.1,
              "y": 804.76,
              "class": "HotspotMapOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 49,
                 "height": 65,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_5.png"
                }
               ]
              }
             },
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 5)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
             "rollOverDisplay": false,
             "map": {
              "x": 371.58,
              "height": 100.04,
              "width": 79.1,
              "offsetY": 0,
              "y": 804.76,
              "class": "HotspotMapOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 24,
                 "height": 32,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_5_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_24BDD7C6_3698_1E96_41C5_786AE6795C0F"
            }
           ],
           "fieldOfViewOverlayOutsideOpacity": 0,
           "thumbnailUrl": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_t.jpg"
          },
          "angle": -14.05
         }
        ],
        "pitch": 0,
        "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
        "partial": false,
        "hfov": 360,
        "hfovMin": 60,
        "hfovMax": 120,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 1904,
             "height": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_r_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "width": 1024,
             "height": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_r.jpeg"
            }
           ]
          },
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 1904,
             "height": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_b_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "width": 1024,
             "height": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_b.jpeg"
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 1904,
             "height": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_u_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "width": 1024,
             "height": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_u.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -31.66,
              "yaw": -31.51,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 192,
                 "height": 191,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_1_0.png"
                }
               ]
              },
              "hfov": 9.85
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "yaw": -31.51,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 96,
                 "height": 95,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -31.66,
              "hfov": 9.85
             }
            ],
            "id": "overlay_321BC4CB_2007_E2C4_41B6_BC58C9F4FCFF"
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 9.99,
              "yaw": 80.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 191,
                 "height": 192,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_0_0.png"
                }
               ]
              },
              "hfov": 11.3
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70, this.camera_5843E15C_5FB8_33BA_41D0_8827F93C46B5); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "yaw": 80.91,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 95,
                 "height": 96,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": 9.99,
              "hfov": 11.3
             }
            ],
            "id": "overlay_3190D5C0_200F_62C4_41B9_B0CFB669F51E"
           },
           {
            "class": "TripodCapPanoramaOverlay",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "width": 850,
               "height": 850,
               "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
              }
             ]
            },
            "hfov": 36,
            "angle": 0,
            "inertia": false,
            "rotate": true,
            "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_tcap0"
           }
          ],
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 1904,
             "height": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_l_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "width": 1024,
             "height": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_l.jpeg"
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 1904,
             "height": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_d_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "width": 1024,
             "height": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_d.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_t.jpg",
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 1904,
             "height": 1904,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_f_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "width": 1024,
             "height": 1024,
             "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_f.jpeg"
            }
           ]
          }
         }
        ],
        "label": "Entrance"
       },
       "yaw": -103.44,
       "class": "AdjacentPanorama",
       "backwardYaw": 80.91,
       "distance": 1
      },
      {
       "panorama": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
       "yaw": 107.31,
       "class": "AdjacentPanorama",
       "backwardYaw": -35.37,
       "distance": 1
      }
     ],
     "mapLocations": [
      {
       "x": 1701.67,
       "class": "PanoramaMapLocation",
       "y": 662.7,
       "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
       "angle": 331.53
      }
     ],
     "pitch": 0,
     "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
     "partial": false,
     "hfov": 360,
     "hfovMin": 60,
     "hfovMax": 120,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 1904,
          "height": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_r_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "width": 1024,
          "height": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_r.jpeg"
         }
        ]
       },
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 1904,
          "height": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_b_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "width": 1024,
          "height": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_b.jpeg"
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 1904,
          "height": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_u_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "width": 1024,
          "height": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_u.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -40.84,
           "yaw": -103.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 192,
              "height": 191,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_1_0.png"
             }
            ]
           },
           "hfov": 8.76
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C, this.camera_5876A18E_5FB8_3296_41B1_D7CC499D829D); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "yaw": -103.44,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 96,
              "height": 95,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -40.84,
           "hfov": 8.76
          }
         ],
         "id": "overlay_320F7096_200B_214C_41A7_B80D4AEFE47C"
        },
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -21.38,
           "yaw": 107.31,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 191,
              "height": 192,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 10.69
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1, this.camera_587EB1A6_5FB8_3296_41AA_D627CF7AA44E); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "yaw": 107.31,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 95,
              "height": 96,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -21.38,
           "hfov": 10.69
          }
         ],
         "id": "overlay_3199AD58_200D_63C4_41B8_D8E9F00055B8"
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "width": 850,
            "height": 850,
            "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
           }
          ]
         },
         "hfov": 36,
         "angle": 0,
         "inertia": false,
         "rotate": true,
         "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_tcap0"
        }
       ],
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 1904,
          "height": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_l_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "width": 1024,
          "height": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_l.jpeg"
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 1904,
          "height": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_d_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "width": 1024,
          "height": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_d.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_t.jpg",
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 1904,
          "height": 1904,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_f_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "width": 1024,
          "height": 1024,
          "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_f.jpeg"
         }
        ]
       }
      }
     ],
     "label": "The Cave"
    },
    "yaw": -35.37,
    "class": "AdjacentPanorama",
    "backwardYaw": 107.31,
    "distance": 1
   }
  ],
  "mapLocations": [
   {
    "x": 2105.53,
    "class": "PanoramaMapLocation",
    "y": 637.45,
    "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "angle": 297.85
   }
  ],
  "pitch": 0,
  "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
  "partial": false,
  "hfov": 360,
  "hfovMin": 60,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_r.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_b.jpeg"
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_u_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_u.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.79,
        "yaw": -35.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 90,
           "height": 89,
           "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 5.39
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70, this.camera_584FC174_5FB8_338A_41C2_A370952648E5); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -35.37,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 45,
           "height": 44,
           "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.79,
        "hfov": 5.39
       }
      ],
      "id": "overlay_325C01D9_2004_E2C4_41BD_4E6FEF1BD249"
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "width": 850,
         "height": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ]
      },
      "hfov": 36,
      "angle": 0,
      "inertia": false,
      "rotate": true,
      "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0"
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_l.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_d_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_d.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_f.jpeg"
      }
     ]
    }
   }
  ],
  "label": "Field"
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer"
 },
 {
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer"
 },
 {
  "initialPosition": {
   "yaw": -26.68,
   "class": "PanoramaCameraPosition",
   "pitch": -0.68
  },
  "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
 {
  "initialPosition": {
   "yaw": -96.14,
   "class": "PanoramaCameraPosition",
   "pitch": -29.84
  },
  "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
 {
  "initialPosition": {
   "yaw": -44.47,
   "class": "PanoramaCameraPosition",
   "pitch": -24.97
  },
  "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_t.jpg",
  "mapLocations": [
   {
    "x": 1105.49,
    "class": "PanoramaMapLocation",
    "y": 692.27,
    "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "angle": -52.19
   }
  ],
  "pitch": 0,
  "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
  "partial": false,
  "hfov": 360,
  "hfovMin": 60,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_r.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_b.jpeg"
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_u_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_u.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -35.87,
        "yaw": 3.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 192,
           "height": 191,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 9.38
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 3.3,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 96,
           "height": 95,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -35.87,
        "hfov": 9.38
       }
      ],
      "id": "overlay_320D3BC2_2005_26C4_41A6_9AE49167AB23"
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.37,
        "yaw": 160.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 191,
           "height": 192,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 11.35
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 160.11,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 95,
           "height": 96,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -8.37,
        "hfov": 11.35
       }
      ],
      "id": "overlay_3199F41B_200D_6144_413F_32A1CBC0AA60"
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "width": 850,
         "height": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ]
      },
      "hfov": 36,
      "angle": 0,
      "inertia": false,
      "rotate": true,
      "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_tcap0"
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_l.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_d_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_d.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_f.jpeg"
      }
     ]
    }
   }
  ],
  "label": "First Steps"
 },
 {
  "initialPosition": {
   "yaw": -4.32,
   "class": "PanoramaCameraPosition",
   "pitch": -28.57
  },
  "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_t.jpg",
  "mapLocations": [
   {
    "x": 927.96,
    "class": "PanoramaMapLocation",
    "y": 489.98,
    "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "angle": -43.96
   }
  ],
  "pitch": 0,
  "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
  "partial": false,
  "hfov": 360,
  "hfovMin": 60,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_r.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_b.jpeg"
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_u_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_u.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "width": 850,
         "height": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ]
      },
      "hfov": 36,
      "angle": 0,
      "inertia": false,
      "rotate": true,
      "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_tcap0"
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.85,
        "yaw": 151.31,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 191,
           "height": 192,
           "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 10.8
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": 151.31,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 95,
           "height": 96,
           "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -19.85,
        "hfov": 10.8
       }
      ],
      "id": "overlay_25CD61BE_2E34_5556_41A6_DE09309597DC"
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_l.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_d_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_d.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_f.jpeg"
      }
     ]
    }
   }
  ],
  "label": "Inside"
 },
 {
  "initialPosition": {
   "yaw": 18.26,
   "class": "PanoramaCameraPosition",
   "pitch": -2.72
  },
  "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_t.jpg",
  "mapLocations": [
   {
    "x": 411.13,
    "class": "PanoramaMapLocation",
    "y": 854.78,
    "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "angle": 275.15
   }
  ],
  "pitch": 0,
  "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
  "partial": false,
  "hfov": 360,
  "hfovMin": 60,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_r.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_b.jpeg"
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_u_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_u.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "width": 850,
         "height": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ]
      },
      "hfov": 45,
      "angle": 0,
      "inertia": false,
      "rotate": true,
      "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_tcap0"
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.34,
        "yaw": -170.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 191,
           "height": 192,
           "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 11.47
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "yaw": -170.44,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 95,
           "height": 96,
           "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 2.34,
        "hfov": 11.47
       }
      ],
      "id": "overlay_3A5148F0_3168_F28A_41A1_3DB77500FFDC"
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_l.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_d_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_d.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 1904,
       "height": 1904,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_f.jpeg"
      }
     ]
    }
   }
  ],
  "label": "Jailhouse"
 },
 {
  "initialPosition": {
   "yaw": 14.64,
   "class": "PanoramaCameraPosition",
   "pitch": -2.91
  },
  "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_585A813D_5FB8_33FA_41C6_D77584E22D45, this.MapViewerMapPlayer)",
    "camera": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera",
    "id": "PanoramaPlayListItem_585A813D_5FB8_33FA_41C6_D77584E22D45"
   },
   {
    "media": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_585B313D_5FB8_33FA_41C1_14D842B903B2, this.MapViewerMapPlayer)",
    "camera": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera",
    "id": "PanoramaPlayListItem_585B313D_5FB8_33FA_41C1_14D842B903B2"
   },
   {
    "media": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_585B413E_5FB8_33F6_41C1_C4F853BB973F, this.MapViewerMapPlayer)",
    "camera": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera",
    "id": "PanoramaPlayListItem_585B413E_5FB8_33F6_41C1_C4F853BB973F"
   },
   {
    "media": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_585B913E_5FB8_33F6_41CA_D75212689B86, this.MapViewerMapPlayer)",
    "camera": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera",
    "id": "PanoramaPlayListItem_585B913E_5FB8_33F6_41CA_D75212689B86"
   },
   {
    "media": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5844213F_5FB8_33F6_41CF_6B8E019BE9F7, this.MapViewerMapPlayer)",
    "camera": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera",
    "id": "PanoramaPlayListItem_5844213F_5FB8_33F6_41CF_6B8E019BE9F7"
   },
   {
    "media": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5844713F_5FB8_33F6_41BA_9EFE0B4E0F96, this.MapViewerMapPlayer)",
    "camera": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera",
    "id": "PanoramaPlayListItem_5844713F_5FB8_33F6_41BA_9EFE0B4E0F96"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 0, 1)",
    "camera": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera"
   },
   {
    "media": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 1, 2)",
    "camera": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera"
   },
   {
    "media": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 2, 3)",
    "camera": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera"
   },
   {
    "media": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 3, 4)",
    "camera": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera"
   },
   {
    "media": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 4, 5)",
    "camera": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera"
   },
   {
    "media": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 5, 0)",
    "camera": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera"
   }
  ],
  "class": "PlayList",
  "id": "playList_30E14E5C_2005_21FC_4194_A254BF014615"
 },
 "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
 {
  "items": [
   {
    "media": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "class": "PlayList",
  "id": "playList_585A213C_5FB8_33FA_41BA_F8E34FDE2A2D"
 },
 {
  "initialPosition": {
   "yaw": 76.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_5843E15C_5FB8_33BA_41D0_8827F93C46B5",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "yaw": -72.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_584FC174_5FB8_338A_41C2_A370952648E5",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "yaw": -99.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_5876A18E_5FB8_3296_41B1_D7CC499D829D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "yaw": 144.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_587EB1A6_5FB8_3296_41AA_D627CF7AA44E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 }
], "children": [
 {
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadWidth": 6,
  "toolTipShadowColor": "#333333",
  "toolTipShadowOpacity": 1,
  "transitionMode": "blending",
  "playbackBarHeadShadow": true,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "borderRadius": 0,
  "progressBackgroundOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "minWidth": 100,
  "id": "MainViewer",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "minHeight": 50,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBorderColor": "#000000",
  "progressBorderRadius": 0,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 0,
  "progressLeft": 0,
  "top": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "paddingTop": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderRadius": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingRight": 0,
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderRadius": 3,
  "playbackBarBottom": 5,
  "playbackBarRight": 0,
  "toolTipBorderSize": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "left": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingRight": 6,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "height": "100%",
  "toolTipFontStyle": "normal",
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingTop": 4
 },
 {
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "children": [
   {
    "backgroundOpacity": 0.2,
    "paddingBottom": 10,
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "scrollBarMargin": 2,
    "itemOpacity": 1,
    "itemThumbnailShadowBlurRadius": 4,
    "paddingLeft": 20,
    "itemThumbnailScaleMode": "fit_outside",
    "itemThumbnailShadowColor": "#000000",
    "maxHeight": 600,
    "itemBorderRadius": 0,
    "horizontalAlign": "left",
    "maxWidth": 800,
    "class": "ThumbnailList",
    "itemPaddingRight": 3,
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowOpacity": 0.8,
    "borderSize": 0,
    "itemThumbnailShadow": true,
    "backgroundColorRatios": [
     0
    ],
    "shadow": false,
    "paddingTop": 10,
    "itemPaddingLeft": 3,
    "itemLabelFontSize": 14,
    "borderRadius": 5,
    "itemBackgroundColor": [],
    "minWidth": 0,
    "itemLabelFontColor": "#FFFFFF",
    "minHeight": 0,
    "itemLabelFontFamily": "Arial",
    "paddingRight": 20,
    "gap": 10,
    "verticalAlign": "top",
    "itemThumbnailShadowSpread": 1,
    "itemHorizontalAlign": "center",
    "itemMode": "normal",
    "itemThumbnailShadowHorizontalLength": 3,
    "playList": "this.playList_30E14E5C_2005_21FC_4194_A254BF014615",
    "itemLabelGap": 5,
    "itemVerticalAlign": "middle",
    "scrollBarColor": "#FFFFFF",
    "itemLabelTextDecoration": "none",
    "selectedItemLabelFontWeight": "bold",
    "itemLabelPosition": "bottom",
    "backgroundColor": [
     "#000000"
    ],
    "itemThumbnailShadowVerticalLength": 3,
    "itemPaddingTop": 3,
    "itemLabelHorizontalAlign": "center",
    "itemPaddingBottom": 3,
    "scrollBarVisible": "rollOver",
    "itemThumbnailWidth": 100,
    "itemThumbnailHeight": 75,
    "layout": "horizontal",
    "itemThumbnailBorderRadius": 5,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "itemLabelFontStyle": "normal",
    "itemBackgroundColorDirection": "vertical",
    "itemBackgroundColorRatios": []
   }
  ],
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "class": "Container",
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "borderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "paddingRight": 0,
  "gap": 10,
  "verticalAlign": "bottom",
  "scrollBarColor": "#000000",
  "left": 0,
  "right": 0,
  "layout": "horizontal",
  "scrollBarVisible": "rollOver",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "height": 200,
  "overflow": "visible",
  "bottom": 0,
  "scrollBarMargin": 2
 },
 {
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadWidth": 6,
  "toolTipShadowColor": "#333333",
  "toolTipShadowOpacity": 1,
  "transitionMode": "blending",
  "playbackBarHeadShadow": true,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "borderRadius": 0,
  "progressBackgroundOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "minWidth": 1,
  "id": "MapViewer",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "minHeight": 1,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBorderColor": "#000000",
  "progressBorderRadius": 0,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 2,
  "progressLeft": 0,
  "top": "0%",
  "progressRight": 0,
  "progressOpacity": 1,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "paddingTop": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderRadius": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingRight": 0,
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderRadius": 3,
  "playbackBarBottom": 0,
  "playbackBarRight": 0,
  "toolTipBorderSize": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipFontColor": "#606060",
  "right": "0%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingRight": 6,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBorderColor": "#000000",
  "width": "25%",
  "playbackBarHeadBorderRadius": 0,
  "height": "25%",
  "toolTipFontStyle": "normal",
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingTop": 4
 },
 {
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "scaleMode": "fit_inside",
  "maxHeight": 400,
  "maxWidth": 400,
  "class": "Image",
  "borderSize": 0,
  "shadow": false,
  "paddingTop": 0,
  "borderRadius": 0,
  "minWidth": 1,
  "id": "Image_20BDD7F0_2E2C_5CEA_41AE_878B01693AEB",
  "paddingRight": 0,
  "verticalAlign": "top",
  "minHeight": 1,
  "url": "skin/Image_20BDD7F0_2E2C_5CEA_41AE_878B01693AEB.jpg",
  "left": "0%",
  "width": "16.038%",
  "height": "25.447%",
  "top": "0%"
 }
], 
 "paddingBottom": 0,
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "horizontalAlign": "left",
 "class": "Player",
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 20,
 "id": "rootPlayer",
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   else if(audio.get('id') in audios){       return;   }   audios[audio.get('id')] = audio;   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audio.pause();   } },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){    return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){    window[key] = value; },
  "existsKey": function(key){    return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       delete audios[audio.get('id')];   }   audio.stop(); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audio.play();   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } }
 },
 "paddingRight": 0,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "start": "this.syncPlaylists([this.playList_30E14E5C_2005_21FC_4194_A254BF014615,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_585A213C_5FB8_33FA_41BA_F8E34FDE2A2D.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10
})