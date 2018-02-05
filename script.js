TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_t.jpg",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": -35.37,
    "backwardYaw": 107.31,
    "panorama": {
     "hfovMax": 120,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_t.jpg",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": 107.31,
       "backwardYaw": -35.37,
       "panorama": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": -103.44,
       "backwardYaw": 80.91,
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_t.jpg",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 80.91,
          "backwardYaw": -103.44,
          "panorama": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
          "distance": 1
         }
        ],
        "label": "Entrance",
        "vfov": 180,
        "pitch": 0,
        "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
        "partial": false,
        "hfov": 360,
        "frames": [
         {
          "left": {
           "class": "ImageResource",
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
           ]
          },
          "thumbnailUrl": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_t.jpg",
          "right": {
           "class": "ImageResource",
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
           ]
          },
          "back": {
           "class": "ImageResource",
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
           ]
          },
          "top": {
           "class": "ImageResource",
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
           ]
          },
          "class": "CubicPanoramaFrame",
          "bottom": {
           "class": "ImageResource",
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
           ]
          },
          "overlays": [
           {
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -31.66,
              "yaw": -31.51,
              "hfov": 9.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 191,
                 "width": 192,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_1_0.png"
                }
               ]
              }
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -31.51,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 95,
                 "width": 96,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -31.66,
              "hfov": 9.85
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_321BC4CB_2007_E2C4_41B6_BC58C9F4FCFF"
           },
           {
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 9.99,
              "yaw": 80.91,
              "hfov": 11.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 192,
                 "width": 191,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_0_0.png"
                }
               ]
              }
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 80.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 96,
                 "width": 95,
                 "url": "media/panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": 9.99,
              "hfov": 11.3
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70, this.camera_76F5AA01_66E0_AF54_41D3_C992DB20D33D); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_3190D5C0_200F_62C4_41B9_B0CFB669F51E"
           },
           {
            "hfov": 36,
            "angle": 0,
            "class": "TripodCapPanoramaOverlay",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
              }
             ]
            },
            "rotate": true,
            "inertia": false,
            "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_tcap0"
           }
          ],
          "front": {
           "class": "ImageResource",
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
           ]
          }
         }
        ],
        "hfovMin": 60,
        "mapLocations": [
         {
          "x": 1456.74,
          "class": "PanoramaMapLocation",
          "map": {
           "fieldOfViewOverlayInsideColor": "#000000",
           "scaleMode": "fit_inside",
           "initialZoomFactor": 1.5,
           "class": "Map",
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "thumbnailUrl": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_t.jpg",
           "fieldOfViewOverlayOutsideColor": "#000000",
           "label": "wildflower_cave_floorplan2",
           "width": 2193,
           "fieldOfViewOverlayOutsideOpacity": 0,
           "minimumZoomFactor": 0.5,
           "fieldOfViewOverlayRadiusScale": 0.3,
           "height": 1512,
           "overlays": [
            {
             "rollOverDisplay": false,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
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
                 "height": 138,
                 "width": 218,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_0.png"
                }
               ]
              }
             },
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
                 "height": 69,
                 "width": 109,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_0_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3B393DB1_36A8_728A_41B6_2EAE9890272E"
            },
            {
             "rollOverDisplay": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 0)",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
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
                 "height": 86,
                 "width": 74,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_1.png"
                }
               ]
              }
             },
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
                 "height": 43,
                 "width": 37,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_1_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3BC9AA71_36A8_318A_41BA_6406BE349EDB"
            },
            {
             "rollOverDisplay": false,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 3)",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
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
                 "height": 128,
                 "width": 95,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_2.png"
                }
               ]
              }
             },
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
                 "height": 64,
                 "width": 47,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_2_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3B26DFA3_36A8_0E8E_41BB_921B37A054DD"
            },
            {
             "rollOverDisplay": false,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 1)",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
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
                 "height": 98,
                 "width": 84,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_3.png"
                }
               ]
              }
             },
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
                 "height": 49,
                 "width": 42,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_3_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3B928D8B_3698_129E_41BA_FE869DC0DE00"
            },
            {
             "rollOverDisplay": false,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 4)",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
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
                 "height": 110,
                 "width": 86,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_4.png"
                }
               ]
              }
             },
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
                 "height": 55,
                 "width": 43,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_4_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_3BB1EC7D_3699_F27A_41B8_13D2CCB4777A"
            },
            {
             "rollOverDisplay": false,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 5)",
               "mapColor": "#FF0000"
              }
             ],
             "useHandCursor": true,
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
                 "height": 65,
                 "width": 49,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_5.png"
                }
               ]
              }
             },
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
                 "height": 32,
                 "width": 24,
                 "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_HS_5_map.gif"
                }
               ]
              },
              "offsetX": 0
             },
             "id": "overlay_24BDD7C6_3698_1E96_41C5_786AE6795C0F"
            }
           ],
           "id": "map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1103,
              "width": 1600,
              "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26.jpeg"
             },
             {
              "class": "ImageResourceLevel",
              "grayscale": true,
              "height": 551,
              "width": 800,
              "url": "media/map_3A50DA75_36A8_118A_41C9_442F4E1B3B26_lq.jpeg"
             }
            ]
           },
           "maximumZoomFactor": 2
          },
          "y": 813.87,
          "angle": -14.05
         }
        ]
       },
       "distance": 1
      }
     ],
     "label": "The Cave",
     "vfov": 180,
     "pitch": 0,
     "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
     "partial": false,
     "hfov": 360,
     "frames": [
      {
       "left": {
        "class": "ImageResource",
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
        ]
       },
       "thumbnailUrl": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_t.jpg",
       "right": {
        "class": "ImageResource",
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
        ]
       },
       "back": {
        "class": "ImageResource",
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
        ]
       },
       "top": {
        "class": "ImageResource",
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
        ]
       },
       "class": "CubicPanoramaFrame",
       "bottom": {
        "class": "ImageResource",
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
        ]
       },
       "overlays": [
        {
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -40.84,
           "yaw": -103.44,
           "hfov": 8.76,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 191,
              "width": 192,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_1_0.png"
             }
            ]
           }
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -103.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 95,
              "width": 96,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -40.84,
           "hfov": 8.76
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C, this.camera_691CC9D1_66E0_ACF4_41C9_D5C6C1211545); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_320F7096_200B_214C_41A7_B80D4AEFE47C"
        },
        {
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -21.38,
           "yaw": 107.31,
           "hfov": 10.69,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 192,
              "width": 191,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_0_0.png"
             }
            ]
           }
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 107.31,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 96,
              "width": 95,
              "url": "media/panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -21.38,
           "hfov": 10.69
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1, this.camera_690A49BA_66E0_ACB4_41D8_D268CCF59914); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_3199AD58_200D_63C4_41B8_D8E9F00055B8"
        },
        {
         "hfov": 36,
         "angle": 0,
         "class": "TripodCapPanoramaOverlay",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
           }
          ]
         },
         "rotate": true,
         "inertia": false,
         "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_tcap0"
        }
       ],
       "front": {
        "class": "ImageResource",
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
        ]
       }
      }
     ],
     "hfovMin": 60,
     "mapLocations": [
      {
       "x": 1701.67,
       "class": "PanoramaMapLocation",
       "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
       "y": 662.7,
       "angle": 331.53
      }
     ]
    },
    "distance": 1
   }
  ],
  "label": "Field",
  "vfov": 180,
  "pitch": 0,
  "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
  "partial": false,
  "hfov": 360,
  "frames": [
   {
    "left": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_t.jpg",
    "right": {
     "class": "ImageResource",
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
     ]
    },
    "back": {
     "class": "ImageResource",
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
     ]
    },
    "top": {
     "class": "ImageResource",
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
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
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
     ]
    },
    "overlays": [
     {
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.79,
        "yaw": -35.37,
        "hfov": 5.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 89,
           "width": 90,
           "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_0_HS_0_0.png"
          }
         ]
        }
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -35.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 45,
           "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.79,
        "hfov": 5.39
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70, this.camera_693B898C_66E0_AD6C_41C4_C244B644D72C); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_325C01D9_2004_E2C4_41BD_4E6FEF1BD249"
     },
     {
      "hfov": 36,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ]
      },
      "rotate": true,
      "inertia": false,
      "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0"
     }
    ],
    "front": {
     "class": "ImageResource",
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
     ]
    }
   }
  ],
  "hfovMin": 60,
  "mapLocations": [
   {
    "x": 2105.53,
    "class": "PanoramaMapLocation",
    "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "y": 637.45,
    "angle": 297.85
   }
  ]
 },
 {
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer"
 },
 {
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.68,
   "pitch": -0.68
  },
  "id": "panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera"
 },
 "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.14,
   "pitch": -29.84
  },
  "id": "panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera"
 },
 "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -44.47,
   "pitch": -24.97
  },
  "id": "panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_t.jpg",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 3.3,
    "backwardYaw": 151.31,
    "panorama": {
     "hfovMax": 120,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_t.jpg",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -46.82,
       "backwardYaw": -170.44,
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_t.jpg",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": -170.44,
          "backwardYaw": -46.82,
          "panorama": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
          "distance": 1
         }
        ],
        "label": "Jailhouse",
        "vfov": 180,
        "pitch": 0,
        "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
        "partial": false,
        "hfov": 360,
        "frames": [
         {
          "left": {
           "class": "ImageResource",
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
           ]
          },
          "thumbnailUrl": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_t.jpg",
          "right": {
           "class": "ImageResource",
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
           ]
          },
          "back": {
           "class": "ImageResource",
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
           ]
          },
          "top": {
           "class": "ImageResource",
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
           ]
          },
          "class": "CubicPanoramaFrame",
          "bottom": {
           "class": "ImageResource",
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
           ]
          },
          "overlays": [
           {
            "hfov": 45,
            "angle": 0,
            "class": "TripodCapPanoramaOverlay",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
              }
             ]
            },
            "rotate": true,
            "inertia": false,
            "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_tcap0"
           },
           {
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 2.34,
              "yaw": -170.44,
              "hfov": 11.47,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 192,
                 "width": 191,
                 "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_0_HS_0_0.png"
                }
               ]
              }
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -170.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 96,
                 "width": 95,
                 "url": "media/panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": 2.34,
              "hfov": 11.47
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722, this.camera_76E619EA_66E0_ACD4_41A0_2806D2BED8C5); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_3A5148F0_3168_F28A_41A1_3DB77500FFDC"
           }
          ],
          "front": {
           "class": "ImageResource",
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
           ]
          }
         }
        ],
        "hfovMin": 60,
        "mapLocations": [
         {
          "x": 411.13,
          "class": "PanoramaMapLocation",
          "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
          "y": 854.78,
          "angle": 275.15
         }
        ]
       },
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": 151.31,
       "backwardYaw": 3.3,
       "panorama": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
       "distance": 1
      }
     ],
     "label": "Inside",
     "vfov": 180,
     "pitch": 0,
     "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
     "partial": false,
     "hfov": 360,
     "frames": [
      {
       "left": {
        "class": "ImageResource",
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
        ]
       },
       "thumbnailUrl": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_t.jpg",
       "right": {
        "class": "ImageResource",
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
        ]
       },
       "back": {
        "class": "ImageResource",
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
        ]
       },
       "top": {
        "class": "ImageResource",
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
        ]
       },
       "class": "CubicPanoramaFrame",
       "bottom": {
        "class": "ImageResource",
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
        ]
       },
       "overlays": [
        {
         "hfov": 36,
         "angle": 0,
         "class": "TripodCapPanoramaOverlay",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
           }
          ]
         },
         "rotate": true,
         "inertia": false,
         "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_tcap0"
        },
        {
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -19.85,
           "yaw": 151.31,
           "hfov": 10.8,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 192,
              "width": 191,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_0_0.png"
             }
            ]
           }
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 151.31,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 96,
              "width": 95,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -19.85,
           "hfov": 10.8
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623, this.camera_6930D975_66E0_ADBC_41D4_9DB83435B50A); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_25CD61BE_2E34_5556_41A6_DE09309597DC"
        },
        {
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -36.63,
           "yaw": -46.82,
           "hfov": 9.29,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 191,
              "width": 192,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_1_0.png"
             }
            ]
           }
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -46.82,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 95,
              "width": 96,
              "url": "media/panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -36.63,
           "hfov": 9.29
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1, this.camera_692B095E_66E0_ADEC_41D8_B8B418A5BCFC); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_6DDE76B9_66D3_0763_41AB_AAFDEE7D6800"
        }
       ],
       "front": {
        "class": "ImageResource",
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
        ]
       }
      }
     ],
     "hfovMin": 60,
     "mapLocations": [
      {
       "x": 927.96,
       "class": "PanoramaMapLocation",
       "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
       "y": 489.98,
       "angle": -43.96
      }
     ]
    },
    "distance": 1
   }
  ],
  "label": "First Steps",
  "vfov": 180,
  "pitch": 0,
  "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
  "partial": false,
  "hfov": 360,
  "frames": [
   {
    "left": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_t.jpg",
    "right": {
     "class": "ImageResource",
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
     ]
    },
    "back": {
     "class": "ImageResource",
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
     ]
    },
    "top": {
     "class": "ImageResource",
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
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
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
     ]
    },
    "overlays": [
     {
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -35.87,
        "yaw": 3.3,
        "hfov": 9.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 191,
           "width": 192,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_1_0.png"
          }
         ]
        }
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 3.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 95,
           "width": 96,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -35.87,
        "hfov": 9.38
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722, this.camera_690209A3_66E0_AD54_41B7_130AD461F9B5); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_320D3BC2_2005_26C4_41A6_9AE49167AB23"
     },
     {
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.37,
        "yaw": 160.11,
        "hfov": 11.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 192,
           "width": 191,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_0_0.png"
          }
         ]
        }
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 160.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 95,
           "url": "media/panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -8.37,
        "hfov": 11.35
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_3199F41B_200D_6144_413F_32A1CBC0AA60"
     },
     {
      "hfov": 36,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_tcap0.png"
        }
       ]
      },
      "rotate": true,
      "inertia": false,
      "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_tcap0"
     }
    ],
    "front": {
     "class": "ImageResource",
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
     ]
    }
   }
  ],
  "hfovMin": 60,
  "mapLocations": [
   {
    "x": 1105.49,
    "class": "PanoramaMapLocation",
    "map": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "y": 692.27,
    "angle": -52.19
   }
  ]
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.32,
   "pitch": -28.57
  },
  "id": "panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera"
 },
 "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.26,
   "pitch": -2.72
  },
  "id": "panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera"
 },
 "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.64,
   "pitch": -2.91
  },
  "id": "panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6927E93A_66E0_ADB4_41B0_3DE411BCCB8B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_6927E93A_66E0_ADB4_41B0_3DE411BCCB8B"
   },
   {
    "media": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6927793B_66E0_ADB4_41A9_BDCBFC1A354A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_6927793B_66E0_ADB4_41A9_BDCBFC1A354A"
   },
   {
    "media": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6927193B_66E0_ADB4_41B1_0754C681AD65, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_6927193B_66E0_ADB4_41B1_0754C681AD65"
   },
   {
    "media": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6926B93C_66E0_ADAC_41D7_ED50FC7A52AA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_6926B93C_66E0_ADAC_41D7_ED50FC7A52AA"
   },
   {
    "media": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6926493C_66E0_ADAC_41D2_D4D79989E69B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_6926493C_66E0_ADAC_41D2_D4D79989E69B"
   },
   {
    "media": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "camera": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6921F93D_66E0_ADAC_41D5_D0BC65DFFFCC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_6921F93D_66E0_ADAC_41D5_D0BC65DFFFCC"
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
    "camera": "this.panorama_1649C877_1EC1_527A_41B1_2915FBCDBDD1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 1, 2)",
    "camera": "this.panorama_1649F5B7_1EC0_B2FA_41B7_BE192CD56C70_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 2, 3)",
    "camera": "this.panorama_1649A5D5_1EC0_D2BE_41B7_C265C9928C4C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 3, 4)",
    "camera": "this.panorama_1649E56F_1EC0_F26A_4186_7F8413D5B623_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 4, 5)",
    "camera": "this.panorama_39EBE4D8_200D_22C4_41B3_58B768A43722_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1",
    "begin": "this.setEndToItemIndex(this.playList_30E14E5C_2005_21FC_4194_A254BF014615, 5, 0)",
    "camera": "this.panorama_38CC3355_3168_378A_41C0_D1D5B45DE1E1_camera",
    "player": "this.MainViewerPanoramaPlayer",
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
    "class": "MapPlayListItem",
    "media": "this.map_3A50DA75_36A8_118A_41C9_442F4E1B3B26",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer"
   }
  ],
  "id": "playList_6924D93A_66E0_ADB4_41CD_97D7F5EF2830"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.56,
   "pitch": 0
  },
  "id": "camera_692B095E_66E0_ADEC_41D8_B8B418A5BCFC"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.7,
   "pitch": 0
  },
  "id": "camera_6930D975_66E0_ADBC_41D4_9DB83435B50A"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.69,
   "pitch": 0
  },
  "id": "camera_693B898C_66E0_AD6C_41C4_C244B644D72C"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -28.69,
   "pitch": 0
  },
  "id": "camera_690209A3_66E0_AD54_41B7_130AD461F9B5"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 144.63,
   "pitch": 0
  },
  "id": "camera_690A49BA_66E0_ACB4_41D8_D268CCF59914"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -99.09,
   "pitch": 0
  },
  "id": "camera_691CC9D1_66E0_ACF4_41C9_D5C6C1211545"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.18,
   "pitch": 0
  },
  "id": "camera_76E619EA_66E0_ACD4_41A0_2806D2BED8C5"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.56,
   "pitch": 0
  },
  "id": "camera_76F5AA01_66E0_AF54_41D3_C992DB20D33D"
 }
], "children": [
 {
  "toolTipFontFamily": "Arial",
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeight": 10,
  "playbackBarLeft": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarRight": 0,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipPaddingBottom": 4,
  "id": "MainViewer",
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadow": true,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadHeight": 15,
  "toolTipShadowSpread": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "minWidth": 100,
  "minHeight": 50,
  "borderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "top": 0,
  "bottom": "0%",
  "paddingBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "paddingTop": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBorderRadius": 0,
  "progressBorderColor": "#000000",
  "progressBorderSize": 0,
  "toolTipOpacity": 1,
  "left": 0,
  "progressHeight": 10,
  "progressLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipFontStyle": "normal",
  "width": "100%",
  "toolTipShadowVerticalLength": 0,
  "progressOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipShadowHorizontalLength": 0,
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipBorderSize": 1
 },
 {
  "minWidth": 20,
  "verticalAlign": "bottom",
  "scrollBarVisible": "rollOver",
  "paddingBottom": 0,
  "contentOpaque": false,
  "children": [
   {
    "verticalAlign": "top",
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadow": true,
    "gap": 10,
    "paddingBottom": 10,
    "itemMode": "normal",
    "itemBackgroundColorRatios": [],
    "itemThumbnailShadowColor": "#000000",
    "scrollBarMargin": 2,
    "itemThumbnailShadowOpacity": 0.8,
    "itemLabelFontStyle": "normal",
    "itemThumbnailWidth": 100,
    "itemOpacity": 1,
    "itemLabelFontSize": 14,
    "itemLabelHorizontalAlign": "center",
    "itemPaddingTop": 3,
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "itemBackgroundColorDirection": "vertical",
    "selectedItemLabelFontWeight": "bold",
    "borderRadius": 5,
    "itemThumbnailHeight": 75,
    "itemThumbnailBorderRadius": 5,
    "paddingTop": 10,
    "itemBorderRadius": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemBackgroundOpacity": 0,
    "horizontalAlign": "left",
    "itemPaddingBottom": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemThumbnailShadowVerticalLength": 3,
    "paddingLeft": 20,
    "class": "ThumbnailList",
    "scrollBarColor": "#FFFFFF",
    "itemHorizontalAlign": "center",
    "itemPaddingLeft": 3,
    "backgroundColorRatios": [
     0
    ],
    "itemPaddingRight": 3,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColor": [
     "#000000"
    ],
    "backgroundColorDirection": "vertical",
    "itemLabelPosition": "bottom",
    "maxHeight": 600,
    "itemVerticalAlign": "middle",
    "maxWidth": 800,
    "itemLabelGap": 5,
    "itemBackgroundColor": [],
    "backgroundOpacity": 0.2,
    "shadow": false,
    "itemThumbnailOpacity": 1,
    "minHeight": 0,
    "itemThumbnailScaleMode": "fit_outside",
    "paddingRight": 20,
    "itemLabelTextDecoration": "none",
    "playList": "this.playList_30E14E5C_2005_21FC_4194_A254BF014615",
    "minWidth": 0,
    "itemThumbnailShadowBlurRadius": 4,
    "borderSize": 0
   }
  ],
  "borderRadius": 0,
  "paddingTop": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "class": "Container",
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "left": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "right": 0,
  "gap": 10,
  "backgroundOpacity": 0,
  "shadow": false,
  "height": 200,
  "minHeight": 20,
  "layout": "horizontal",
  "paddingRight": 0,
  "bottom": 0,
  "overflow": "visible",
  "borderSize": 0
 },
 {
  "toolTipFontFamily": "Arial",
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarBorderSize": 0,
  "playbackBarBottom": 0,
  "playbackBarHeight": 10,
  "playbackBarLeft": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarRight": 0,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipPaddingBottom": 4,
  "id": "MapViewer",
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadow": true,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadHeight": 15,
  "toolTipShadowSpread": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "borderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "minWidth": 1,
  "top": "0%",
  "paddingBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "paddingTop": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBorderRadius": 0,
  "progressBorderColor": "#000000",
  "progressBorderSize": 0,
  "toolTipOpacity": 1,
  "progressHeight": 10,
  "right": "0%",
  "progressLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 2,
  "toolTipFontStyle": "normal",
  "width": "25%",
  "toolTipShadowVerticalLength": 0,
  "progressOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipShadowHorizontalLength": 0,
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundOpacity": 1,
  "progressRight": 0,
  "height": "25%",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipBorderSize": 1
 },
 {
  "scaleMode": "fit_inside",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "borderRadius": 0,
  "id": "Image_20BDD7F0_2E2C_5CEA_41AE_878B01693AEB",
  "paddingTop": 0,
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "class": "Image",
  "url": "skin/Image_20BDD7F0_2E2C_5CEA_41AE_878B01693AEB.jpg",
  "left": "0%",
  "maxHeight": 400,
  "width": "16.038%",
  "maxWidth": 400,
  "backgroundOpacity": 0,
  "shadow": false,
  "height": "25.447%",
  "top": "0%",
  "paddingRight": 0,
  "minWidth": 1,
  "minHeight": 1,
  "borderSize": 0
 }
], 
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "id": "rootPlayer",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){    return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "getKey": function(key){    return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "registerKey": function(key, value){    window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; }
 },
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "class": "Player",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "width": "100%",
 "gap": 10,
 "start": "this.syncPlaylists([this.playList_30E14E5C_2005_21FC_4194_A254BF014615,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6924D93A_66E0_ADB4_41CD_97D7F5EF2830.set('selectedIndex', 0)",
 "shadow": false,
 "height": "100%",
 "minHeight": 20,
 "layout": "absolute",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "overflow": "visible",
 "borderSize": 0
})