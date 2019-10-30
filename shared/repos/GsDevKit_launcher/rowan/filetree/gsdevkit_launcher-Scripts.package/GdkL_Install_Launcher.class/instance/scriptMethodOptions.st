options
scriptMethodOptions
  ^ super scriptMethodOptions
    ,
      {#('clone' nil #'none' #'clone:').
      #('populate' nil #'optional' #'stoneName:')}