"""empty message

Revision ID: 72224f94068c
Revises: a939d9ce3331
Create Date: 2021-05-08 18:38:29.857516

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72224f94068c'
down_revision = 'a939d9ce3331'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password', sa.VARCHAR(length=250), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
