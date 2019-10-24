options
scriptMethodOptions
  ^ super scriptMethodOptions
    ,
      {#('clone' nil #'none' #'clone:').
      #('create' nil #'optional' #'stoneName:')}