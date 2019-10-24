options
scriptMethodOptions
  ^ super scriptMethodOptions
    ,
      {#('write' nil #'required' #'write:').
      #('list' nil #'none' #'doList')}