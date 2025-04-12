# Ecommerce

(
  auth.uid() 
  IN (
    SELECT 
    user_roles.user_id
    FROM 
    user_roles
    WHERE 
    (user_roles.role = 'admin'::text)
  )
)